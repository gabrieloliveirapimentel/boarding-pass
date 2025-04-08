import { FaPlane } from "react-icons/fa6";
import QRCodeImg from "./assets/qr-code.png";

import { Layout } from "./components/layout";
import { formattedDate } from "./utils/utils";

export function App() {
  return (
    <Layout>
      <h2>Cartão de embarque</h2>

      <div className="rounded-3xl overflow-hidden">
        <div className="flex flex-col px-8 py-6 gap-6 rounded-3xl bg-white border-b-2 border-dashed border-b-gray-300">
          <div className="flex justify-between">
            <div>
              <p className="text-[#000000A3] text-sm">Voo</p>
              <span>RS995</span>
            </div>
            <div className="text-right">
              <p className="text-[#000000A3] text-sm">Data</p>
              <span>{formattedDate}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#000000A3] text-sm">São Paulo, Brasil</p>
              <h1>GRU</h1>
              <p className="text-[16px]">17:00</p>
            </div>

            <FaPlane size={24} />

            <div className="text-right">
              <p className="text-[#000000A3] text-sm">São Francisco, EUA</p>
              <h1>SFO</h1>
              <p className="text-[16px]">
                04:48<sup>+1</sup>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-8 py-6 gap-6 rounded-3xl bg-white border-b-2 border-dashed border-b-gray-300">
          <div>
            <p className="text-[#000000A3] text-sm">Passageiro</p>
            <span>Gabriel Pimentel</span>
          </div>
          <div className="text-right">
            <p className="text-[#000000A3] text-sm">Assento</p>
            <span>28A</span>
          </div>
        </div>

        <div className="flex justify-between px-8 py-6 gap-2 rounded-tl-3xl rounded-tr-3xl bg-white">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[#000000A3] text-sm">Embarque</p>
              <p className="bg-[#633BBC] text-white font-medium inline-block px-2.5 py-1 rounded-xl">
                16:15
              </p>
            </div>
            <div>
              <p className="text-[#000000A3] text-sm">Terminal</p>
              <span>2</span>
            </div>
            <div>
              <p className="text-[#000000A3] text-sm">Portão</p>
              <span>15</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={QRCodeImg} />
            <p className="text-sm text-center text-[#000000A3]">
              Grupo de embarque: 3
            </p>
          </div>
        </div>
        <div className="p-3 text-center text-[16px] bg-white">
          <p>
            <span>Atenção: </span>o portão fecha 16:45
          </p>
        </div>
      </div>

      <p className="text-[#ffffffa1] text-center text-sm mt-4 max-w-xs mx-auto">
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </p>
    </Layout>
  );
}
