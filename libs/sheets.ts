import { google, sheets_v4 } from "googleapis";

export async function addDataToSheet(data: {
  nama: string;
  noWa: string;
}): Promise<void> {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

    const privateKey = (process.env.NEXT_PUBLIC_GOOGLE_SHEETS_PRIVATE_KEY || "").replace(
      /\\n/g,
      "\n",
    );

    const jwt = new google.auth.JWT(
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      privateKey,
      target,
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });

    const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
    if (!spreadsheetId) {
      throw new Error("Spreadsheet ID is not defined.");
    }

    const range = "Data User"; // Change it to the appropriate sheet name

    // Get the current data in the sheet to find the next incremental value
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = response.data.values;
    const nextRow = (values?.length || 0) + 1; // Incremental value

    // Prepare the data to be added
    const newData = [[nextRow.toString(), data.nama, data.noWa]];

    // Add the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: newData,
      },
    } as sheets_v4.Params$Resource$Spreadsheets$Values$Append); // Type assertion
  } catch (err) {
    console.error("Error adding data to sheet:", err);
    throw err;
  }
}
