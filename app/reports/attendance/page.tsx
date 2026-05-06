'use client';

import Image from 'next/image';

export default function Page() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <main className="max-w-[800px] mx-auto mt-lg px-md md:px-0 mb-xl w-full">
      {/* Report Canvas */}
      <div className="report-container bg-surface-container-lowest shadow-lg border border-outline-variant p-lg md:p-xl rounded-none min-h-[1056px] flex flex-col">
        
        {/* Formal Header */}
        <div className="text-center mb-lg relative">
          <button onClick={handlePrint} className="absolute right-0 top-0 flex items-center gap-xs px-md py-sm bg-primary-container text-on-primary-container rounded-lg font-label-sm hover:opacity-80 transition-all no-print">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-printer"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>
            Exportar PDF
          </button>
          
          <div className="w-24 h-24 mx-auto mb-md flex items-center justify-center bg-surface-container-high rounded-full border border-outline-variant overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/logo/150/150" 
              alt="IEADTAM Logo" 
              width={96} 
              height={96}
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-h2 font-h2 text-primary uppercase tracking-wider mb-xs">IEADTAM</h1>
          <p className="text-body-md font-body-md text-on-surface-variant mb-sm">Igreja Evangélica Assembleia de Deus no Tamboara</p>
          
          <div className="w-full h-[2px] bg-secondary mb-[1px]"></div>
          <div className="w-full h-[1px] bg-secondary mb-md"></div>
          
          <h2 className="text-h3 font-h3 text-on-surface">Relatório de Frequência Escolar</h2>
        </div>

        {/* Data Summary: Bento Style Summary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-lg">
          <div className="p-sm border-l-4 border-primary bg-surface-container-low">
            <span className="block text-caption font-caption text-on-surface-variant uppercase tracking-tighter">Data da Aula</span>
            <span className="text-body-md font-bold text-on-surface">15 Out 2023</span>
          </div>
          <div className="p-sm border-l-4 border-primary bg-surface-container-low">
            <span className="block text-caption font-caption text-on-surface-variant uppercase tracking-tighter">Classe</span>
            <span className="text-body-md font-bold text-on-surface">Jovens Herdeiros</span>
          </div>
          <div className="p-sm border-l-4 border-primary bg-surface-container-low">
            <span className="block text-caption font-caption text-on-surface-variant uppercase tracking-tighter">Total Alunos</span>
            <span className="text-body-md font-bold text-on-surface">24 Presentes</span>
          </div>
          <div className="p-sm border-l-4 border-secondary bg-surface-container-low">
            <span className="block text-caption font-caption text-on-surface-variant uppercase tracking-tighter">Oferta Total</span>
            <span className="text-body-md font-bold text-secondary">R$ 145,50</span>
          </div>
        </div>

        {/* Teacher Assignment info */}
        <div className="mb-md pb-sm border-b border-outline-variant">
          <p className="text-body-md font-body-md"><span className="font-bold">Professor(a) Regente:</span> Diácono Samuel Oliveira</p>
        </div>

        {/* Table Listing */}
        <div className="flex-grow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-on-surface">
                <th className="py-sm text-label-sm font-label-sm text-on-surface-variant uppercase bg-surface-container-lowest">Nº</th>
                <th className="py-sm text-label-sm font-label-sm text-on-surface-variant uppercase">Nome do Aluno</th>
                <th className="py-sm text-label-sm font-label-sm text-on-surface-variant uppercase text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-body-md">
              {[
                { no: '01', name: 'Ana Beatris Santos', status: 'PRESENTE', present: true },
                { no: '02', name: 'Carlos Eduardo Silva', status: 'PRESENTE', present: true },
                { no: '03', name: 'Daniel Ferreira Lima', status: 'AUSENTE', present: false },
                { no: '04', name: 'Gabriela M. Oliveira', status: 'PRESENTE', present: true },
                { no: '05', name: 'João Victor Souza', status: 'PRESENTE', present: true },
                { no: '06', name: 'Larissa Fernanda Lima', status: 'PRESENTE', present: true },
                { no: '07', name: 'Lucas Henrique Ribeiro', status: 'PRESENTE', present: true },
                { no: '08', name: 'Mariana Costa', status: 'AUSENTE', present: false },
                { no: '09', name: 'Otávio Augusto Neves', status: 'PRESENTE', present: true },
                { no: '10', name: 'Priscila Helena Rocha', status: 'PRESENTE', present: true },
              ].map((row, i) => (
                <tr key={row.no} className={`border-b border-outline-variant ${i % 2 !== 0 ? 'bg-surface-container-lowest' : 'bg-[#fdfdfd]'}`}>
                  <td className="py-sm text-on-surface-variant px-1">{row.no}</td>
                  <td className="py-sm font-bold px-1">{row.name}</td>
                  <td className="py-sm text-right px-1">
                    <span className={`font-bold px-sm py-xs rounded ${row.present ? 'text-primary-container bg-on-primary-container/10' : 'text-error bg-error-container/20'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-md italic text-caption text-on-surface-variant text-center">
            Documento gerado eletronicamente via Portal Administrativo IEADTAM.
          </div>
        </div>

        {/* Signature Section */}
        <div className="mt-xl grid grid-cols-1 md:grid-cols-2 gap-xl pt-lg">
          <div className="text-center">
            <div className="border-t border-on-surface mx-auto w-64 mb-xs"></div>
            <p className="text-label-sm font-label-sm text-on-surface uppercase">Assinatura do Professor</p>
          </div>
          <div className="text-center">
            <div className="border-t border-on-surface mx-auto w-64 mb-xs"></div>
            <p className="text-label-sm font-label-sm text-on-surface uppercase">Assinatura do Superintendente</p>
          </div>
        </div>

      </div>
    </main>
  );
}
