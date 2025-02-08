import { useState } from "react";

const Message = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const phoneNumber = "5515996005455";
    const encodedMessage = encodeURIComponent(
      `Olá, meu nome é ${name}.\n${message}`
    );
    const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="message"
      className="relative pb-[56px] w-full flex justify-center content-center items-center"
    >
      <div className="container mx-auto">
        <div className="w-full max-w-[700px] h-full mx-auto px-6 py-8 text-center bg-[#e69752] rounded-xl flex-col lg:flex-row justify-center items-center content-center">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white">
            Fale com a nossa equipe
          </h1>
          <form className="flex flex-col w-full gap-4" onSubmit={sendMessage}>
            <div className="bg-white w-full m-auto flex-col lg:flex-row items-center max-w-4xl rounded-md">
              <input
                className="flex h-10 border border-input px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full text-xs pr-2 pl-2 py-4 rounded-md text-gray-900 font-semibold hover:border-white bg-white"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="bg-white w-full m-auto flex-col lg:flex-row items-center max-w-4xl rounded-md">
              <textarea
                className="flex h-20 border border-input px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full text-xs pr-2 pl-2 py-4 rounded-md text-gray-900 font-semibold hover:border-white bg-white"
                placeholder="Deixe sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              className="inline-flex justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none hover:bg-primary/90 h-10 items-center w-full my-5 p-2 font-medium text-white transition duration-500 ease-in-out transform rounded-lg bg-[#171717] disabled:opacity-50"
              type="submit"
            >
              <span className="justify-center text-sm md:text-lg">
                ENVIAR MENSAGEM
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Message;
