import Chrip from "../components/chrip";
export default function Home() {
  return (
    <div
      className="bg-black text-white h-screen w-full body-font 
    font-poppins flex flex-col p-4 items-center justify-between"
    >
      <h1 className="p-4 text-center font-bold text-[2.5rem]">BlockGPT</h1>

      <div className="flex flex-col p-2 space-y-6  w-3/4 text-center">
        <div className="md:w-2/4 w-full mx-auto">
          <input
            className="bg-white p-2 w-full border text-black"
            type="text"
          />
        </div>
        <div className="md:w-2/5 mx-auto">
          <p className="font-bold text-sm md:text-lg">
            Search Anything and Everything related to Blockchain
          </p>
        </div>
        <div className="flex flex-wrap gap-2 p-2 mx-auto text-center">
          <Chrip title="Show me latest transaction vitalik.eth" />
          <Chrip title="what is alchemy api" />
          <Chrip title="Show me latest transaction" />
          <Chrip title="Show me latest transaction" />
          <Chrip title="Show me latest transaction" />
          <Chrip title="Show me latest transaction" />
          <Chrip title="Show me latest transaction vitalik.eth" />
          <Chrip title="what is alchemy api" />
        </div>
      </div>
      <footer className="text-center w-full px-0">
        <div className="border-solid border-[0.01rem] w-full border-grey-800"></div>
        <p className="p-4"> Powered by OpenAI and Alchemy API</p>
      </footer>
    </div>
  );
}
