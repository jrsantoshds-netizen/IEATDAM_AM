export default function Page() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-gutter py-lg mb-24">
      <div className="flex flex-col md:flex-row gap-lg">
        {/* Left Side: Header & Context */}
        <div className="w-full md:w-1/3">
          <h1 className="text-h2 font-h2 text-primary mb-sm">Cadastro de Alunos</h1>
          <p className="text-body-md font-body-md text-on-surface-variant mb-md">
              Insira os dados do novo estudante para registrar a matrícula na Escola Dominical. Certifique-se de preencher todos os campos obrigatórios.
          </p>

          <div className="bg-primary border-t-2 border-secondary p-md rounded-xl shadow-sm text-on-primary">
            <h3 className="text-label-sm font-label-sm uppercase tracking-widest opacity-80 mb-xs">Aviso Administrativo</h3>
            <p className="text-caption font-caption">Dados de endereço e WhatsApp são fundamentais para a comunicação com os responsáveis e visitas pastorais.</p>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full md:w-2/3">
          <form className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-md md:p-xl space-y-md">
            
            {/* Profile Picture Upload Section */}
            <div className="flex flex-col items-center justify-center py-md border-2 border-dashed border-outline-variant rounded-xl bg-surface-container-low mb-lg group hover:border-primary transition-colors cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-surface-container-highest flex items-center justify-center text-outline mb-sm border-2 border-surface-container-lowest shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
              </div>
              <span className="text-label-sm font-label-sm text-on-surface-variant group-hover:text-primary">Carregar Foto do Aluno</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="md:col-span-2">
                <label className="block text-label-sm font-label-sm text-on-surface mb-xs">Nome Completo</label>
                <input type="text" className="w-full bg-surface-container-lowest border border-outline rounded px-sm py-base text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Ex: João da Silva Santos" />
              </div>

              <div>
                <label className="block text-label-sm font-label-sm text-on-surface mb-xs">WhatsApp (Com DDD)</label>
                <input type="text" className="w-full bg-surface-container-lowest border border-outline rounded px-sm py-base text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="(00) 00000-0000" />
              </div>

              <div>
                <label className="block text-label-sm font-label-sm text-on-surface mb-xs">Idade</label>
                <input type="number" className="w-full bg-surface-container-lowest border border-outline rounded px-sm py-base text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Ex: 12" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-label-sm font-label-sm text-on-surface mb-xs">Congregação</label>
                <select className="w-full bg-surface-container-lowest border border-outline rounded px-sm py-base text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Selecione a Congregação</option>
                  <option value="sede">Templo Sede</option>
                  <option value="betel">Congregação Betel</option>
                  <option value="sharon">Congregação Monte Sinai</option>
                  <option value="canaa">Congregação Canaã</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-label-sm font-label-sm text-on-surface mb-xs">Endereço Residencial</label>
                <textarea rows={3} className="w-full bg-surface-container-lowest border border-outline rounded px-sm py-base text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Rua, Número, Bairro, CEP"></textarea>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-sm pt-md border-t border-outline-variant">
              <button type="button" className="w-full sm:w-auto px-xl py-sm border border-secondary text-secondary font-label-sm text-label-sm rounded-lg hover:bg-surface-container-high transition-colors">
                Cancelar
              </button>
              <button type="submit" className="w-full sm:w-auto px-xl py-sm bg-[#006437] text-on-primary font-label-sm text-label-sm rounded-lg hover:bg-primary transition-all shadow-md active:scale-95">
                Salvar Aluno
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
