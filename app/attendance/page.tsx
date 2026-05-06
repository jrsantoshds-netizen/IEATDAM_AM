export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-gutter py-md pb-32 w-full">
      {/* Class Selection & Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-lg">
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl border-t-4 border-primary p-md shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-md">
            <div className="flex-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant mb-xs block">Turma Selecionada</label>
              <div className="relative">
                <select className="w-full bg-surface border border-outline-variant rounded-lg p-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>Jovens e Adolescentes - Sala 04</option>
                  <option>Crianças - Arca de Noé</option>
                  <option>Adultos - Doutrina Bíblica</option>
                  <option>Novos Convertidos - Integração</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
            <div className="flex gap-sm">
              <div className="bg-surface-container-low px-md py-sm rounded-lg border border-outline-variant text-center min-w-[100px]">
                <span className="block text-caption font-caption text-on-surface-variant">Matriculados</span>
                <span className="text-h3 font-h3 text-primary">24</span>
              </div>
              <div className="bg-surface-container-low px-md py-sm rounded-lg border border-outline-variant text-center min-w-[100px]">
                <span className="block text-caption font-caption text-on-surface-variant">Presentes</span>
                <span className="text-h3 font-h3 text-secondary">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Offering Input Card */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl border-t-4 border-secondary p-md shadow-sm">
          <label className="font-label-sm text-label-sm text-on-surface-variant mb-xs block">Oferta da Turma</label>
          <div className="flex items-center gap-xs bg-surface border border-outline-variant rounded-lg p-sm mb-md focus-within:ring-2 focus-within:ring-secondary focus-within:border-secondary transition-all">
            <span className="font-bold text-secondary">R$</span>
            <input className="w-full border-none bg-transparent p-0 focus:ring-0 text-body-lg font-bold outline-none" placeholder="0,00" type="text" />
          </div>
          <button className="w-full bg-primary-container text-on-primary-container py-sm rounded-lg font-bold flex items-center justify-center gap-sm hover:opacity-90 active:scale-95 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-save"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
            Registrar Presença
          </button>
        </div>
      </div>

      {/* Student List Header */}
      <div className="flex items-center justify-between mb-sm px-xs">
        <h2 className="text-h2 font-h2 text-primary">Lista de Chamada</h2>
        <div className="flex gap-sm">
          <button className="text-label-sm font-label-sm text-primary flex items-center gap-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
            Marcar Todos
          </button>
        </div>
      </div>

      {/* Student List Bento-ish Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-sm">
        {[
          { id: '1', initials: 'AA', name: 'Adriano Alves de Souza', date: 'Mar 2023', age: 19 },
          { id: '2', initials: 'BM', name: 'Beatriz Mendonça', date: 'Jan 2024', age: 17 },
          { id: '3', initials: 'CL', name: 'Carlos Lima Silva', date: 'Jun 2022', age: 20, checked: true },
          { id: '4', initials: 'DR', name: 'Daniela Rocha', date: 'Fev 2024', age: 18 },
          { id: '5', initials: 'EL', name: 'Emanuel Lucas', date: 'Out 2023', age: 16 },
          { id: '6', initials: 'FS', name: 'Fernanda Santos', date: 'Jan 2023', age: 21, checked: true },
        ].map(student => (
          <div key={student.id} className="flex items-center justify-between bg-surface-container-lowest p-md rounded-xl border border-outline-variant hover:shadow-md transition-shadow">
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 bg-primary-fixed text-on-primary-fixed rounded-full flex items-center justify-center font-bold text-body-lg">
                {student.initials}
              </div>
              <div>
                <h3 className="font-bold text-on-surface">{student.name}</h3>
                <p className="text-caption font-caption text-on-surface-variant">Membro desde {student.date} &bull; Idade: {student.age}</p>
              </div>
            </div>
            <div className="flex items-center gap-sm">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="hidden peer" defaultChecked={student.checked} />
                <div className="flex items-center gap-xs px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant peer-checked:bg-secondary peer-checked:text-white peer-checked:border-secondary transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <span className="font-label-sm text-label-sm">Presente</span>
                </div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
