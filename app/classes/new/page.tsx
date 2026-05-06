import Image from 'next/image';
import { ChevronDown, PlusCircle, Search, UserMinus, UserPlus } from 'lucide-react';

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-gutter py-lg pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
            
            {/* Left Column: Form Details */}
            <div className="lg:col-span-5 space-y-md">
                <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-t-2 border-primary">
                    <header className="mb-lg">
                        <h2 className="text-h2 font-h2 text-primary border-b border-secondary pb-xs inline-block">Cadastro de Turma</h2>
                        <p className="text-on-surface-variant mt-xs">Insira os detalhes fundamentais para a nova classe dominical.</p>
                    </header>

                    <div className="space-y-md">
                        <div className="flex flex-col gap-xs">
                            <label className="text-label-sm font-label-sm text-on-surface-variant">Nome da Turma</label>
                            <input type="text" className="w-full p-sm bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Ex: Adolescentes - Estrela da Manhã" />
                        </div>

                        <div className="flex flex-col gap-xs">
                            <label className="text-label-sm font-label-sm text-on-surface-variant">Lição do Trimestre</label>
                            <div className="relative">
                                <select className="w-full p-sm bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                    <option>Selecione a lição atual</option>
                                    <option>Os Milagres de Jesus</option>
                                    <option>A Epístola aos Romanos</option>
                                    <option>História do Antigo Testamento</option>
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                                  <ChevronDown className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-md border-t border-outline-variant">
                            <button className="w-full bg-primary-container text-on-primary-container py-md rounded font-bold hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center gap-2">
                                <PlusCircle className="w-5 h-5" />
                                Criar Turma
                            </button>
                        </div>
                    </div>
                </div>

                {/* Featured Image Card */}
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://picsum.photos/seed/organization/800/600" 
                      alt="Organização e Fé" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-md text-white">
                        <p className="text-h3 font-h3 leading-tight">Organização e Fé</p>
                        <p className="text-caption font-caption opacity-90">Gestão eficiente para o crescimento espiritual da nossa comunidade.</p>
                    </div>
                </div>
            </div>

            {/* Right Column: Student Selection Bento Grid */}
            <div className="lg:col-span-7 space-y-md">
                <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-t-2 border-primary">
                    <div className="flex justify-between items-center mb-md">
                        <h3 className="text-h3 font-h3 text-primary">Adicionar Alunos</h3>
                        <span className="text-label-sm font-label-sm text-secondary bg-secondary-container/20 px-sm py-xs rounded-full">12 Selecionados</span>
                    </div>

                    <div className="relative mb-md">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                          <Search className="w-5 h-5" />
                        </div>
                        <input type="text" className="w-full pl-10 p-sm bg-surface-container-low border border-outline-variant rounded-full focus:border-primary outline-none transition-all" placeholder="Buscar aluno por nome ou CPF..." />
                    </div>

                    {/* Selected Students List */}
                    <div className="space-y-sm">
                        <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Lista de Matriculados</p>
                        <div className="max-h-[500px] overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                           {[
                            { id: '1', init: 'A', name: 'Ana Clara Oliveira', meta: 'ID: 2023-049 | Idade: 14 anos' },
                            { id: '2', init: 'B', name: 'Bruno Henrique Silva', meta: 'ID: 2023-112 | Idade: 15 anos' },
                            { id: '3', init: 'G', name: 'Gabriel Santos Mendonça', meta: 'ID: 2023-015 | Idade: 14 anos' },
                            { id: '4', init: 'M', name: 'Mariana Costa Luz', meta: 'ID: 2023-088 | Idade: 13 anos' },
                           ].map(student => (
                            <div key={student.id} className="flex items-center justify-between p-sm bg-surface-container hover:bg-surface-container-high rounded transition-colors group">
                                <div className="flex items-center gap-md">
                                    <div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center font-bold text-h3">{student.init}</div>
                                    <div>
                                        <p className="font-bold text-on-surface">{student.name}</p>
                                        <p className="text-caption font-caption text-on-surface-variant">{student.meta}</p>
                                    </div>
                                </div>
                                <button className="text-error hover:bg-error-container p-xs rounded transition-all">
                                    <UserMinus className="w-5 h-5" />
                                </button>
                            </div>
                           ))}
                        </div>

                        {/* Add Button for more selection */}
                        <div className="pt-sm border-t border-outline-variant">
                            <button className="w-full flex items-center justify-center gap-2 text-primary font-bold hover:bg-surface-container-low py-sm rounded transition-colors">
                                <UserPlus className="w-5 h-5" />
                                Selecionar mais alunos da lista geral
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
