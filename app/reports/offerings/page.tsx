import Image from 'next/image';

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-gutter py-lg pb-32">
        {/* Report Header Section */}
        <section className="text-center mb-xl relative">
            <div className="flex flex-col items-center justify-center mb-md">
                <div className="w-24 h-24 mx-auto mb-md flex items-center justify-center bg-surface-container-high rounded-full border border-outline-variant overflow-hidden">
                  <Image 
                    src="https://picsum.photos/seed/dizimos/150/150" 
                    alt="IEADTAM Logo" 
                    width={96} 
                    height={96}
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="text-h2 font-h2 text-primary">Relatório de Dízimos por Congregação</h2>
                <p className="text-on-surface-variant font-body-md mt-xs">Período: Outubro 2023</p>
            </div>
            <div className="report-double-rule w-full"></div>
        </section>

        {/* Bento Grid Layout for Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
            <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-t-2 border-primary">
                <span className="text-caption font-caption text-on-surface-variant uppercase tracking-wider">Total Geral</span>
                <div className="text-h3 font-h3 text-primary mt-xs">R$ 45.280,00</div>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-t-2 border-secondary">
                <span className="text-caption font-caption text-on-surface-variant uppercase tracking-wider">Congregações Ativas</span>
                <div className="text-h3 font-h3 text-secondary mt-xs">12 Unidades</div>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-t-2 border-primary-container">
                <span className="text-caption font-caption text-on-surface-variant uppercase tracking-wider">Maior Contribuição</span>
                <div className="text-h3 font-h3 text-primary-container mt-xs">Sede Central</div>
            </div>
        </div>

        {/* Grouped List: Congregation 1 */}
        <div className="mb-lg space-y-md">
            <div className="flex items-center justify-between border-b border-outline-variant pb-xs">
                <h3 className="text-h3 font-h3 text-primary flex items-center gap-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
                    Sede Central
                </h3>
                <span className="text-label-sm font-label-sm text-on-surface-variant">45 Membros</span>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-surface-container-low">
                            <th className="px-md py-sm text-label-sm font-label-sm text-on-surface-variant">Membro / Aluno</th>
                            <th className="px-md py-sm text-label-sm font-label-sm text-on-surface-variant text-right">Valor do Dízimo</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant">
                        <tr className="hover:bg-surface-container transition-colors">
                            <td className="px-md py-sm text-body-md">Carlos Alberto Silva</td>
                            <td className="px-md py-sm text-body-md text-right font-semibold text-secondary">R$ 450,00</td>
                        </tr>
                        <tr className="hover:bg-surface-container transition-colors">
                            <td className="px-md py-sm text-body-md">Maria Eduarda Santos</td>
                            <td className="px-md py-sm text-body-md text-right font-semibold text-secondary">R$ 1.200,00</td>
                        </tr>
                        <tr className="hover:bg-surface-container transition-colors">
                            <td className="px-md py-sm text-body-md">Ricardo Mendes Oliveira</td>
                            <td className="px-md py-sm text-body-md text-right font-semibold text-secondary">R$ 300,00</td>
                        </tr>
                        <tr className="bg-surface-container-high">
                            <td className="px-md py-sm text-label-sm font-label-sm text-primary">Subtotal Congregação</td>
                            <td className="px-md py-sm text-body-lg font-bold text-primary text-right">R$ 1.950,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Grouped List: Congregation 2 */}
        <div className="mb-lg space-y-md">
            <div className="flex items-center justify-between border-b border-outline-variant pb-xs">
                <h3 className="text-h3 font-h3 text-primary flex items-center gap-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                    Bethel Sul
                </h3>
                <span className="text-label-sm font-label-sm text-on-surface-variant">22 Membros</span>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-surface-container-low">
                            <th className="px-md py-sm text-label-sm font-label-sm text-on-surface-variant">Membro / Aluno</th>
                            <th className="px-md py-sm text-label-sm font-label-sm text-on-surface-variant text-right">Valor do Dízimo</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant">
                        <tr className="hover:bg-surface-container transition-colors">
                            <td className="px-md py-sm text-body-md">Ana Paula Ferreira</td>
                            <td className="px-md py-sm text-body-md text-right font-semibold text-secondary">R$ 250,00</td>
                        </tr>
                        <tr className="hover:bg-surface-container transition-colors">
                            <td className="px-md py-sm text-body-md">João Vitor Lima</td>
                            <td className="px-md py-sm text-body-md text-right font-semibold text-secondary">R$ 800,00</td>
                        </tr>
                        <tr className="bg-surface-container-high">
                            <td className="px-md py-sm text-label-sm font-label-sm text-primary">Subtotal Congregação</td>
                            <td className="px-md py-sm text-body-lg font-bold text-primary text-right">R$ 1.050,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Footer Total */}
        <section className="mt-xl p-lg bg-primary-container text-on-primary rounded-xl flex flex-col md:flex-row justify-between items-center shadow-lg">
            <div>
                <h4 className="text-h3 font-h3">Grande Total Consolidado</h4>
                <p className="text-on-primary-container opacity-90 text-body-md">Referente a todas as congregações cadastradas</p>
            </div>
            <div className="text-h1 font-h1 mt-md md:mt-0">
                R$ 45.280,00
            </div>
        </section>
    </main>
  );
}
