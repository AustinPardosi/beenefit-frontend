import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  if (!process.env.NEXT_PUBLIC_GOOGLE_SHEETS_PRIVATE_KEY) {
    return NextResponse.json(
      { error: "Google Sheets private key is missing" },
      { status: 500 },
    );
  }

  try {
    const requestBody = await req.json();
    const { name, phone } = requestBody;

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_PRIVATE_KEY.replace(
          /\\n/g,
          "\n",
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Get the current timestamp
    const timestamp = new Date();
    // Format the timestamp using toLocaleString()
    const formattedTimestamp = timestamp.toLocaleString();

    console.log("SINI")
    // Append data to the specified range in the Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
      range: "A1:C1", // Adjust the range as needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[formattedTimestamp, name, phone]],
      },
    });

    return NextResponse.json({ data: response.data }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
