import React, { useState, useMemo } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Spinner,
} from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const [namaValue, setNamaValue] = useState("");
  const [whatsappValue, setWhatsappValue] = useState("");
  const [loading, setLoading] = useState(false);

  const validateNumber = (value: string) => value.match(/^08\d{8,11}$/);
  const isInvalidNumber = useMemo(
    () => !validateNumber(whatsappValue),
    [whatsappValue],
  );
  const isNamaEmpty = useMemo(() => namaValue.trim() === "", [namaValue]);

  const handleClose = () => {
    // Reset the form and close the modal
    setNamaValue("");
    setWhatsappValue("");
    onOpenChange(false);
  };

  const handleSend = async () => {
    try {
      setLoading(true); // Set loading to true before making the request

      const formattedWhatsappValue = `'${whatsappValue}`;
      // Send data to the Next.js API route
      const response = await axios.post("/api/sheets", {
        name: namaValue,
        phone: formattedWhatsappValue,
      });

      if (response.status === 200) {
        const data = response.data;
        toast.success("Berhasil !", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClose();
      } else {
        toast.error("Gagal", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error sending data:", error);
      // toast.error("Error", {
      //   position: "bottom-right",
      //   autoClose: 5000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={handleClose}
        placement="center"
        className="text-black flex flex-col justify-center"
        size="xl"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col justify-center items-center gap-4">
                <p className="text-3xl font-extrabold text-[#228B22]">
                  PESAN SEKARANG
                </p>
                <p className="text-xl font-bold text-[#FFB000] text-center">
                  Tim kami akan segera menghubungi Anda
                </p>
              </ModalHeader>
              <div className="border-2 border-[#228B22] rounded-xl p-4 bg-[#F1F1F1] mx-8">
                <ModalBody>
                  <Input
                    isClearable
                    isRequired
                    label="Nama"
                    placeholder="Masukkan nama anda"
                    variant="bordered"
                    size="lg"
                    labelPlacement="outside"
                    className={`border-[#FFB000] ${
                      isNamaEmpty ? "border-red-500" : ""
                    }`}
                    isInvalid={isNamaEmpty}
                    color={isNamaEmpty ? "danger" : "success"}
                    errorMessage={isNamaEmpty && "Masukkan nama anda"}
                    onValueChange={setNamaValue}
                    value={namaValue}
                    classNames={{
                      label: "font-extrabold text-xl text-black",
                      inputWrapper: "bg-white border-[#FFB000]",
                    }}
                  />
                  <Input
                    isClearable
                    isRequired
                    label="No. Whatsapp"
                    placeholder="Masukkan nomor whatsapp anda (08******)"
                    type="text"
                    variant="bordered"
                    size="lg"
                    labelPlacement="outside"
                    className={`border-[#FFB000] ${
                      isInvalidNumber ? "border-red-500" : ""
                    }`}
                    isInvalid={isInvalidNumber}
                    color={isInvalidNumber ? "danger" : "success"}
                    errorMessage={
                      isInvalidNumber &&
                      "Masukkan nomor whatsapp yang benar (08******)"
                    }
                    onValueChange={setWhatsappValue}
                    value={whatsappValue}
                    classNames={{
                      label: "font-extrabold text-xl text-black",
                      inputWrapper: "bg-white border-[#FFB000]",
                    }}
                  />
                  <div className="flex justify-center pt-4">
                    <Button
                      size="lg"
                      radius="full"
                      className="bg-[#228B22] text-white text-2xl font-bold px-20 py-4"
                      onPress={handleSend}
                    >
                      Kirim
                    </Button>
                  </div>
                  {loading && (
                    <div className="flex justify-center pt-4">
                      <Spinner label="Loading..." color="warning" />
                    </div>
                  )}
                </ModalBody>
              </div>
              <ModalFooter>
                <Link href="https://linktr.ee/beenefit">
                  <Button
                    radius="full"
                    className="bg-[#228B22] text-white text-md font-bold px-12 justify-end"
                    onPress={handleClose}
                  >
                    Kontak Kami
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ContactModal;
