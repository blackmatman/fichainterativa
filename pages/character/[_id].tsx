// importando todas as bibliotecas que serão usadas
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import React, { useState } from "react";
import Image from 'next/image';




// interface com todas as informações presentes na table Personagens
interface current_character{
    _id: string;
    mesa: string,
    idMesa: string;
    idUser: string;
    emailUser:string;
    personagem: string;
    jogador: string;
    idade: number;
    aparencia: string;
    fruta: string;
    raca: string;
    classe: string;
    estilodeluta: string;
    vidaatual: number;
    vidatotal: number;
    Staminaatula: number;
    StaminaTotal: number;
    Infeccao: number;
    Niveldeprocurado: number;
    StatusForca: number;
    StatusDestreza: number;
    StatusConstituicao: number;
    StatusInteligencia: number;
    StatusSabedoria: number;
    StatusCarisma: number;
    PontosGerais: number;
    PontosForca: number;
    PontosCoragem: number;
    PontosFurtivo: number;
    PontosInteligencia: number;
    PontosExplorador: number;
    PontosSorte: number;
    PontosClasse: number;
    PontosUsuario: number;
    PontosHaki: number;
    Inventario: string;
    Dinheiro: number;
    Historia: string;
    Truque: object[];
    Tecnicas: [];
    SuperMovimento: []
}
// requisitar as informações na table Personagens.
export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) =>{
    const _id = context.query._id as string;
    const response = await axios.get<current_character>(`${process.env.NEXT_PUBLIC_URL}/api/personagem/${_id}`);
    const PersonResponse = response.data;
    return {
        props:PersonResponse,
    };
};
// função principal
export default function character2({
    _id,
    mesa,
    idMesa,
    idUser,
    emailUser,
    personagem,
    jogador,
    idade,
    aparencia,
    fruta,
    raca,
    classe,
    estilodeluta,
    vidaatual,
    vidatotal,
    Staminaatula,
    StaminaTotal,
    Infeccao,
    Niveldeprocurado,
    StatusForca,
    StatusDestreza,
    StatusConstituicao,
    StatusInteligencia,
    StatusSabedoria,
    StatusCarisma,
    PontosGerais,
    PontosForca,
    PontosCoragem,
    PontosFurtivo,
    PontosInteligencia,
    PontosExplorador,
    PontosSorte,
    PontosClasse,
    PontosUsuario,
    PontosHaki,
    Inventario,
    Dinheiro,
    Historia,
    Truque,
    Tecnicas,
    SuperMovimento}:current_character):JSX.Element{
        
        const [Name,SetName] = useState(personagem); // Variavel mutavel para nome do personagem 
        const [Jogador,SetJogador] = useState(jogador); // Variavel mutavel para nome do jogador
        const [Idade,SetIdade] = useState(idade); // Variavel mutavel para Idade do personagem
        const [Aparencia,SetAparencia] = useState(aparencia); // Variavel mutavel para aparencia do personagem
        const [Fruta,SetFruta] = useState(fruta); // Variavel mutavel para fruta do personagem
        const [Raca,SetRaca ] = useState(raca); // Variavel mutavel para raça do personagem
        const [Classe,SetClasse] = useState(classe); // Variavel mutavel para Classe do personagem
        const [EstilodeLuta,SetEstilodeLuta] = useState(estilodeluta); // Variavel mutavel para Estilo de luta do personagem
        const [VidaAtual,SetVidaAtual ] = useState(vidaatual); // Variavel mutavel para vida atual do personagem
        const [VidaMax, SetVidaMax] = useState(vidatotal); // Variavel mutavel para vida máxima do personagem
        const [StaminaAtual,SetStaminaAtual] = useState(Staminaatula); // Variavel mutavel para a estamina atual do personagem
        const [StaminaMax,SetStaminaMax] = useState(StaminaTotal); // Variavel mutavel para a estamina máxima do personagem
        const [Infecção,SetInfecção ] = useState(Infeccao); // Variavel mutavel para a infecção do personagem
        const [niveldeprocurado,SetNiveldeprocurado ] = useState(Niveldeprocurado); // Variavel mutavel para o nivel de procurado do personagem
        const [statusForca,SetStatusForca ] = useState(StatusForca); // Variavel mutavel para Força do personagem
        const [statusDestreza,SetStatusDestreza ] = useState(StatusDestreza); // Variavel mutavel para Destreza do personagem
        const [statusConstituicao,SetStatusConstituicao ] = useState(StatusConstituicao); // Variavel mutavel para Constituição do personagem
        const [statusInteligencia,SetStatusInteligencia ] = useState(StatusInteligencia); // Variavel mutavel para Inteligencia do personagem
        const [statusSabedoria,SetStatusSabedoria ] = useState(StatusSabedoria); // Variavel mutavel para Sabedoria do personagem
        const [statusCarisma,SetStatusCarisma ] = useState(StatusCarisma); // Variavel mutavel para carisma do personagem
        const [pontosGerais,SetPontosGerais ] = useState(PontosGerais); // Variavel mutavel para os pontos gerais do personagem
        const [pontosForca,SetPontosForca ] = useState(PontosForca); // Variavel mutavel para os pontos forca do personagem
        const [pontosCoragem,SetPontosCoragem ] = useState(PontosCoragem); // Variavel mutavel para os pontos coragem do personagem
        const [pontosFurtivo,SetPontosFurtivo ] = useState(PontosFurtivo); // Variavel mutavel para os pontos furtivo do personagem
        const [pontosInteligencia,SetPontosInteligencia ] = useState(PontosInteligencia); // Variavel mutavel para os pontos Inteligencia do personagem
        const [pontosExplorador,SetPontosExplorador ] = useState(PontosExplorador); // Variavel mutavel para os pontos Explorador do personagem
        const [pontosSorte,SetPontosSorte ] = useState(PontosSorte); // Variavel mutavel para os pontos Sorte do personagem
        const [pontosClasse,SetPontosClasse ] = useState(PontosClasse); // Variavel mutavel para os pontos Classe do personagem
        const [pontosUsuario,SetPontosUsuario ] = useState(PontosUsuario); // Variavel mutavel para os pontos Usuario do personagem
        const [pontosHaki,SetPontosHaki ] = useState(PontosHaki); 
        const [inventario,SetInventario ] = useState(Inventario);
        const [dinheiro,SetDinheiro ] = useState(Dinheiro);
        const [historia,SetHistoria ] = useState(Historia);

        // Variavel mutavel para setar novas habilidades
        const [NomeHab,SetNomeHab ] = useState(null); // nome da habilidade
        const [HabCusto,SetHabCusto] = useState(null); // custo da habilidade
        const [HabExplain,SetHabExplain] = useState(null); // explicação da habilidade
        const [Habd20,SetHabd20] = useState(null); // d20 da habilidade
        const [Habd12,SetHabd12] = useState(null); // d12 da habilidade
        const [Habd10,SetHabd10] = useState(null); // d10 da habilidade  
        const [Habd8,SetHabd8] = useState(null); // d8 da habilidade
        const [Habd6,SetHabd6] = useState(null); // d6 da habilidade
        const [Habd4,SetHabd4] = useState(null); // d4 da habilidade
        const [haveTest,SetHaveTest] = useState(false); // Se haverá teste

        const [newTipe, SetNewTipe] = useState(0); // Seleciona se adicionará um novo truque, tecnica ou super movimento

        const [menu, Setmenu ] = useState(false);

        const [pages,SetPages ] = useState(1); // seleciona a pagina que irá aparecer.
        // informar as variaveis que serão usadas para atualizadas o banco de dados
        const data2 = {
            _id,
            mesa,
            idMesa,
            idUser,
            emailUser,
            Name,   
            Jogador,
            Idade,
            Aparencia,
            Fruta,
            Raca,
            Classe,
            EstilodeLuta,
            VidaAtual,
            VidaMax,
            StaminaAtual,
            StaminaMax,
            Infecção,
            niveldeprocurado,
            statusForca,
            statusDestreza,
            statusConstituicao,
            statusInteligencia,
            statusSabedoria,
            statusCarisma,
            pontosGerais,
            pontosForca,
            pontosCoragem,
            pontosFurtivo,
            pontosInteligencia,
            pontosExplorador,
            pontosSorte,
            pontosClasse,
            pontosUsuario,
            pontosHaki,
            inventario,
            dinheiro,
            historia,
            Truque,
            Tecnicas,
            SuperMovimento,
        } 
        // atualizará o banco de dados pela api(api/atualizar/index.ts)
        const PersonSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            try{
                await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/atualizar`, data2);
            } catch(err) {
                alert(err.response.data.error);
            }
        } 
        // Classe que será usada para adicionar ou ler habilidades
        class NewTruque {
            NameHab:string;
            teste: boolean;
            d20: number;
            d12: number;
            d10: number;
            d8: number;
            d6: number;
            d4: number;
            custo:number;
            explication:string;
        }
        // Informa todos valores para a nova habilidade adicionada
        const AttTruques = async(event:React.FormEvent<HTMLFormElement>) =>{
            if(!NomeHab || !HabCusto || !Habd20 || !Habd12 || !Habd10 || !Habd8 || !Habd6 || !Habd4 || !HabExplain){
            let habTipes = [Truque, Tecnicas, SuperMovimento]
            let newTruque = new NewTruque()
            newTruque.NameHab = NomeHab;
            newTruque.custo = HabCusto;
            newTruque.d20 = Habd20;
            newTruque.d12 = Habd12;
            newTruque.d10 = Habd10;
            newTruque.d8 = Habd8;
            newTruque.d6 = Habd6;
            newTruque.d4 = Habd4;
            newTruque.explication = HabExplain;
            newTruque.teste = haveTest;
            habTipes[newTipe].push(newTruque);
            SetNomeHab(null);
            SetHabCusto(null);
            SetHabd20(null);
            SetHabd12(null);    
            SetHabd10(null);
            SetHabd8(null);
            SetHabd6(null);
            SetHabd4(null);
            SetPages(1);}else{
                alert("Missing Information!!")
            }
        }
        // Começo do view
    return (<div className='text-base font-Roboto bg-primary h-screen w-full' >      
                    <div className='flex justify-between bg-secondary py-2 px-6 items-center'>
                        <button className='ml-16'><svg className='fill-current text-tertiary' xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 200 228" version="1.1">
                                    <g id="surface1">
                                    <path  d="M 82.398438 18.632812 C 74.699219 27.203125 62.5 40.957031 55.101562 49.226562 L 41.601562 64.273438 L 98 64.574219 C 129 64.671875 154.601562 64.574219 154.898438 64.273438 C 155.199219 63.875 155 63.378906 154.398438 62.980469 C 153.800781 62.582031 146.199219 54.210938 137.5 44.34375 C 102.300781 4.582031 100.800781 2.988281 98.5 2.988281 C 96.800781 2.988281 92.601562 7.074219 82.398438 18.632812 Z M 82.398438 18.632812 "/>
                                    <path  d="M 45.5 29.496094 C 27.898438 39.660156 12 48.628906 10.300781 49.527344 C 6.398438 51.519531 6.199219 52.515625 9.300781 53.710938 C 10.5 54.210938 15.101562 56.203125 19.5 58.296875 C 32.898438 64.574219 30.699219 65.769531 54.5 38.863281 C 65.898438 26.007812 76 14.648438 76.800781 13.652344 C 77.601562 12.753906 78.101562 11.757812 77.898438 11.558594 C 77.699219 11.261719 63.101562 19.433594 45.5 29.496094 Z M 45.5 29.496094 "/>
                                    <path  d="M 118 11.558594 C 118 12.058594 137.699219 34.777344 139.101562 35.875 C 139.398438 36.171875 143 40.160156 147 44.84375 C 151 49.527344 156.199219 55.304688 158.601562 57.796875 C 161 60.289062 163 62.582031 163 62.980469 C 163 63.476562 163.699219 63.777344 164.5 63.777344 C 166.5 63.777344 190.398438 53.214844 190.699219 52.117188 C 190.898438 51.71875 185.5 48.230469 178.699219 44.445312 C 172 40.65625 156.101562 31.589844 143.398438 24.214844 C 122.101562 12.058594 118 9.964844 118 11.558594 Z M 118 11.558594 "/>
                                    <path  d="M 1 101.742188 C 1 134.628906 1.300781 144.59375 2.199219 144.292969 C 2.898438 143.996094 3.699219 142.800781 4.101562 141.402344 C 4.5 140.109375 6.199219 135.226562 7.898438 130.542969 C 15.300781 109.816406 19.300781 98.453125 22.601562 88.6875 C 24.601562 82.910156 26.5 77.527344 27 76.730469 C 27.398438 75.933594 28 74.039062 28.300781 72.644531 C 29 69.855469 28.300781 69.457031 8.800781 60.886719 C 0.300781 57.101562 1 53.511719 1 101.742188 Z M 1 101.742188 "/>
                                    <path  d="M 182 63.578125 C 176.199219 66.167969 170.699219 68.757812 169.699219 69.355469 C 168 70.351562 168.601562 72.546875 178.601562 100.746094 C 184.398438 117.386719 190.398438 134.328125 191.800781 138.214844 C 193.101562 142.199219 194.601562 145.289062 194.898438 145.089844 C 195.199219 144.890625 195.398438 125.359375 195.199219 101.742188 C 195 68.558594 194.699219 58.792969 193.699219 58.792969 C 193.101562 58.894531 187.800781 60.984375 182 63.578125 Z M 182 63.578125 "/>
                                    <path  d="M 40 72.746094 C 40 73.242188 42.601562 78.226562 45.800781 83.90625 C 51.398438 93.671875 63.601562 115.195312 67.699219 122.570312 C 68.800781 124.464844 73.398438 132.535156 78 140.40625 C 82.5 148.28125 87.5 157.050781 89.101562 159.839844 C 90.800781 162.628906 93.300781 167.3125 94.699219 170.203125 C 96.199219 172.992188 98 175.382812 98.699219 175.382812 C 99.398438 175.382812 100 174.984375 100 174.488281 C 100 173.988281 103.101562 168.308594 106.800781 161.832031 C 110.5 155.253906 115.898438 145.886719 118.699219 141.003906 C 131.601562 117.984375 142.800781 98.453125 147.199219 90.882812 C 149.800781 86.398438 152 82.410156 152 82.113281 C 152 81.914062 153.101562 79.917969 154.5 77.726562 C 155.898438 75.535156 157 73.34375 157 72.746094 C 157 72.046875 137.601562 71.75 98.5 71.75 C 62.199219 71.75 40 72.148438 40 72.746094 Z M 40 72.746094 "/>
                                    <path  d="M 32 81.414062 C 30.300781 86.695312 23 107.722656 21.898438 110.113281 C 21.5 111.210938 18.101562 120.578125 14.5 131.039062 C 10.800781 141.402344 6.699219 153.0625 5.398438 156.75 C 4.101562 160.535156 3 164.125 3 164.820312 C 3 165.617188 4.601562 166.417969 6.699219 166.714844 C 10.5 167.214844 30.300781 170.003906 51.5 172.992188 C 79.800781 177.078125 91.199219 178.472656 91.699219 178.074219 C 91.800781 177.875 89.800781 173.988281 87.199219 169.304688 C 81.199219 158.941406 63.398438 127.550781 48.699219 101.644531 C 33 73.839844 34 75.035156 32 81.414062 Z M 32 81.414062 "/>
                                    <path  d="M 161.300781 78.921875 C 160.5 80.019531 147.5 102.640625 131 132.035156 C 129.800781 134.230469 125.300781 142.101562 121 149.476562 C 116.800781 156.851562 111.398438 166.417969 109.101562 170.699219 L 104.800781 178.574219 L 109.601562 177.976562 C 118 176.878906 128.101562 175.484375 138 173.988281 C 143.199219 173.191406 150 172.296875 153 171.898438 C 173 169.703125 194 166.117188 194 164.921875 C 194 164.324219 192.199219 158.644531 189.898438 152.367188 C 187.699219 146.085938 185.5 139.910156 185 138.515625 C 184.5 137.117188 181.898438 129.546875 179 121.574219 C 173.101562 104.933594 166.300781 85.699219 164.699219 80.917969 C 163.601562 77.429688 162.800781 77.03125 161.300781 78.921875 Z M 161.300781 78.921875 "/>
                                    <path  d="M 19.101562 176.878906 C 19.898438 177.675781 24.199219 180.464844 28.601562 182.957031 C 41.101562 190.234375 49.601562 195.117188 53.199219 197.207031 C 55 198.203125 64.699219 203.785156 74.800781 209.664062 C 84.898438 215.445312 93.601562 220.226562 94.101562 220.226562 C 94.699219 220.226562 94.898438 213.449219 94.800781 203.085938 L 94.5 185.949219 L 87 184.75 C 79.5 183.554688 76.101562 183.058594 48.5 179.371094 C 40.300781 178.273438 30.5 176.878906 26.800781 176.382812 C 17.699219 174.984375 17.300781 175.085938 19.101562 176.878906 Z M 19.101562 176.878906 "/>
                                    <path  d="M 161 177.476562 C 148.699219 179.371094 129.601562 182.0625 111.300781 184.453125 L 102 185.75 L 102 202.988281 C 102 212.453125 102.398438 220.226562 102.898438 220.226562 C 103.699219 220.226562 131.398438 204.582031 139.199219 199.601562 C 141.300781 198.402344 143.199219 197.308594 143.398438 197.308594 C 143.601562 197.308594 148.5 194.617188 154.199219 191.230469 C 159.898438 187.839844 167 183.753906 170 182.0625 C 177.800781 177.777344 179 176.980469 179 176.183594 C 179 175.085938 175.398438 175.382812 161 177.476562 Z M 161 177.476562 "/>
                                    </g>
                                </svg></button>
                        <button className='mr-16' onClick={()=>Setmenu(!menu)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg></button>
                    </div>
                    <div className={`${ menu ? 'w-0':'hidden'} absolute rounded-lg bg-primary shadow-2xl`} style={{border: '1px solid #ccc',right:'1rem',width:'14rem',height:'25rem', top:'4.5rem'}}>
                                        <div className='flex flex-col justify-items-center'>
                                            <div className='flex justify-center items-center' style={{borderTop:'1px solid #ccc'}}><button onClick={() => SetPages(1)} className='text-base p-3'>Principal</button></div>
                                            <div className='flex justify-center items-center' style={{borderTop:'1px solid #ccc'}}><button onClick={() => SetPages(2)} className='text-base p-3'>Informação</button></div>
                                            <div className='flex justify-center items-center' style={{borderTop:'1px solid #ccc'}}><button onClick={() => SetPages(3)} className='text-base p-3'>Atributos</button></div>
                                            <div className='flex justify-center items-center' style={{borderTop:'1px solid #ccc'}}><button onClick={() => SetPages(4)} className='text-base p-3'>Pontos</button></div>
                                            <div className='flex justify-center items-center' style={{borderTop:'1px solid #ccc'}}><button onClick={() => SetPages(5)} className='text-base p-3'>Inventário</button></div>
                                            <div className='flex justify-center items-center' style={{borderTop:'1px solid #ccc'}}><button onClick={() => SetPages(6)} className='text-base p-3'>Truques</button></div>
                                            <div className='flex justify-center items-center' style={{borderTop:'1px solid #ccc'}}><button onClick={() => SetPages(7)} className='text-base p-3'>Técnica</button></div>
                                            <div className='flex justify-center items-center' style={{borderTop:'1px solid #ccc'}}><button onClick={() => SetPages(8)} className='text-base p-3'>Super Movimento</button></div>
                                        </div>
                                    </div>
                    <div >
                    <form  onSubmit={PersonSubmit} className='flex content-center justify-center overflow-auto' style={{height:"95vh"}}>

                        <div className='grid lg:grid-cols-2 grid-cols-1 place-content-center place-items-center mx-16 gap-16'>
                                <div className={`lg:grid grid-cols-2 place-content-center text-2xl w-5/6 ${pages == 1 ? 'grid' : 'hidden'}`}>
                                <button className=''  type='submit'>salvar</button>
                                <div className='col-span-2 flex justify-center mb-2'>
                                    <Image
                                        className=''
                                        src="/rpg/eu.jpg"
                                        alt="Picture of the author"
                                        width={100}
                                        height={100}
                                        />
                                    </div>
                                        <div className='border border-gray-500 mb-2 mr-px'>Name: </div>
                                        <input type='text' value={Name} onChange={(e) => {SetName(e.target.value);}} className='border border-gray-500 mb-2 px-2'/>

                                        <div  className='border border-gray-500 mb-2 mr-px'>Jogador: </div>  
                                        <input type='text' value={Jogador} onChange={(e) => {SetJogador(e.target.value);}}  className='border border-gray-500 mb-2 px-2'/>

                                        <div  className='border border-gray-500 mb-2 mr-px'>Nivel de Procurado: </div>
                                        <input type='number' value={niveldeprocurado} onChange={(e) => {SetNiveldeprocurado(e.target.valueAsNumber);}}  className='border border-gray-500 mb-2 px-2'/>
                                        <div  className='col-span-2 grid grid-cols-4 mb-2'>
                                            <div  className='border border-gray-500 mr-px'>Atual:</div>
                                            <input type='number' value={VidaAtual} max={VidaMax} onChange={(e) => {SetVidaAtual(e.target.valueAsNumber);}}  className='border border-gray-500 mb-2 px-2 mr-px'/>
                                            <div  className='border border-gray-500 mr-px' >Máxima:</div>
                                            <input type='number' value={VidaMax} min={0} onChange={(e) => {SetVidaMax(e.target.valueAsNumber);}}  className='border border-gray-500 mb-2 px-2'/>
                                        </div>
                                    <div  className='col-span-2 mb-2'>
                                        <div  id="health" className='bg-red-600 h-1' style={{width:`${(VidaAtual/VidaMax)*100}%`}}></div>
                                    </div>
                                        <div className='col-span-2 grid grid-cols-4 mb-2 mr-px'>
                                            <div  className='border border-gray-500 mr-px'>Atual:</div>
                                            <input type='number'max={StaminaMax} value={StaminaAtual} onChange={(e) => {SetStaminaAtual(e.target.valueAsNumber);}}  className='border border-gray-500 mb-2 px-2 mr-px'/>
                                            <div  className='border border-gray-500 mr-px' >Máxima:</div>
                                            <input type='number' value={StaminaMax} min={0} onChange={(e) => {SetStaminaMax(e.target.valueAsNumber);}}  className='border border-gray-500 mb-2 px-2'/>
                                        </div>
                                    <div  className='col-span-2 mb-2'>
                                        <div  id="health" className='bg-yellow-400 h-1' style={{width:`${(StaminaAtual/StaminaMax)*100}%`}}></div>
                                    </div>
                                        <div className='text-center justify-center px-1 border border-gray-500 mb-2 mr-px'>Infecção: </div>
                                        <input type='number' min={0} value={Infecção} onChange={(e) => {SetInfecção(e.target.valueAsNumber);}}  className='border border-gray-500 px-2'/><br/>
                                    <div  className='col-span-2 mb-2'>
                                        <div  id="health" className='bg-green-600 h-1' style={{width:`${(Infecção/20)*100}%`}}></div>
                                    </div>
                                </div>
                                {(pages == 1) && (
                                    <div className='hidden lg:grid grid-cols-1 place-content-center w-5/6' >
                                        <div><button onClick={() => SetPages(2)}  className='text-2xl'>Informação</button></div>
                                        <div><button onClick={() => SetPages(3)}  className='text-2xl'>Atributos</button></div>
                                        <div><button onClick={() => SetPages(4)}  className='text-2xl'>Pontos</button></div>
                                        <div><button onClick={() => SetPages(5)}  className='text-2xl'>Inventário</button></div>
                                        <div><button onClick={() => SetPages(6)}  className='text-2xl'>Truques</button></div>
                                        <div><button onClick={() => SetPages(7)}  className='text-2xl'>Técnica</button></div>
                                        <div><button onClick={() => SetPages(8)}  className='text-2xl'>Super Movimento</button></div>
                                    </div>  
                                )}
                                {(pages == 2) && (
                                    <div  className='grid grid-cols-2 place-content-center w-5/6'>
                                        <button className='col-span-2' onClick={()=>{SetPages(1)}}>X</button>
                                            <div  className='text-2xl'>Idade: </div>
                                            <input type='number' value={Idade} placeholder='idade' onChange={(e) => {SetIdade(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Aparência: </div>
                                            <input type='text' value={Aparencia} placeholder='aparencia' onChange={(e) => {SetAparencia(e.target.value);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Fruta: </div>
                                            <input type='text' value={Fruta} placeholder='Fruta' onChange={(e) => {SetFruta(e.target.value);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Raça: </div>
                                            <input type='text' value={Raca} placeholder='raça' onChange={(e) => {SetRaca(e.target.value);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Classe: </div>
                                            <input type='text' value={Classe} placeholder='Classe' onChange={(e) => {SetClasse(e.target.value);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Estilo de Luta: </div>
                                            <input type='text' value={EstilodeLuta} placeholder='EstilodeLuta' onChange={(e) => {SetEstilodeLuta(e.target.value);}}  className='text-2xl'/>

                                    </div>
                                )}
                                {(pages == 3) && (
                                    <div  className='grid grid-cols-3 place-content-center w-5/6'>
                                    <button onClick={()=>{SetPages(1)}}>X</button>
                                            <div  className='col-span-3 text-2xl'>Pontos</div> 
                                            <div  className='text-2xl'>Força: </div>
                                            <input type='Number' value={statusForca} placeholder='Status Forca' onChange={(e) => {SetStatusForca(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <input type='Number' value={0} placeholder='ForcaPor'   className='text-2xl'/>
                                            <div  className='text-2xl'>Destreza: </div>
                                            <input type='Number' value={statusDestreza} placeholder='Status Destreza' onChange={(e) => {SetStatusDestreza(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <input type='Number' value={0} placeholder='DestrezaPor'   className='text-2xl'/>
                                            <div  className='text-2xl'>Constituição: </div>
                                            <input type='Number' value={statusConstituicao} placeholder='Status Constituicao' onChange={(e) => {SetStatusConstituicao(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <input type='Number' value={0} placeholder='ConstituicaoPor'   className='text-2xl'/>
                                          <div  className='text-2xl'>Inteligência: </div>
                                            <input type='Number' value={statusInteligencia} placeholder='Status Inteligencia' onChange={(e) => {SetStatusInteligencia(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <input type='Number' value={0} placeholder='ForcaPor'   className='text-2xl'/>
                                            <div  className='text-2xl'>Sabedoria: </div>
                                            <input type='Number' value={statusSabedoria} placeholder='Status Sabedoria' onChange={(e) => {SetStatusSabedoria(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <input type='Number' value={0} placeholder='ForcaPor'   className='text-2xl'/>
                                            <div  className='text-2xl'>Carisma: </div>
                                            <input type='Number' value={statusCarisma} placeholder='Status Carisma' onChange={(e) => {SetStatusCarisma(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <input type='Number' value={0} placeholder='ForcaPor'   className='text-2xl'/>
                                    </div>
                                )}    
                                 {(pages == 4) && (
                                    <div  className='grid grid-cols-2 place-content-center w-5/6'>
                                    <button onClick={()=>{SetPages(1)}}>X</button>
                                        <div  className='col-span-2 text-2xl'>Pontos</div>
                                            <div  className='text-2xl'>Gerais: </div>
                                            <input type='Number' value={pontosGerais} placeholder='Gerais' onChange={(e) => {SetPontosGerais(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Força: </div>
                                            <input type='Number' value={pontosForca} placeholder='Coragem' onChange={(e) => {SetPontosForca(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Coragem: </div>
                                            <input type='Number' value={pontosCoragem} placeholder='Coragem' onChange={(e) => {SetPontosCoragem(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Furtivo: </div>
                                            <input type='Number' value={pontosFurtivo} placeholder='Furtivo' onChange={(e) => {SetPontosFurtivo(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Inteligência: </div>
                                            <input type='Number' value={pontosInteligencia} placeholder='Inteligencia' onChange={(e) => {SetPontosInteligencia(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Explorador: </div>
                                            <input type='Number' value={pontosExplorador} placeholder='Explorador' onChange={(e) => {SetPontosExplorador(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Sorte: </div>
                                            <input type='Number' value={pontosSorte} placeholder='Sorte' onChange={(e) => {SetPontosSorte(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Classe: </div>
                                            <input type='Number' value={pontosClasse} placeholder='Classe' onChange={(e) => {SetPontosClasse(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Usuário: </div>
                                            <input type='Number' value={pontosUsuario} placeholder='Usuario' onChange={(e) => {SetPontosUsuario(e.target.valueAsNumber);}}  className='text-2xl'/>
                                            <div  className='text-2xl'>Haki: </div>
                                            <input type='Number' value={pontosHaki} placeholder='Haki' onChange={(e) => {SetPontosHaki(e.target.valueAsNumber);}}  className='text-2xl'/>
                                    </div>
                                )}
                                 {(pages == 5) && (
                                    <div  className='grid grid-cols-1 place-content-center w-5/6'>
                                    <button className='col-span-1' onClick={() => {SetPages(1)}}>X</button>
                                            <h3>Inventário:</h3><br/>
                                            <div  className=''>
                                                <textarea cols={80} rows={10} value={inventario} onChange={(e) => {SetInventario(e.target.value);}}  className=''/><br/>
                                            </div>
                                            <div  className='grid grid-cols-2'>
                                                <span  className=''>Beris</span>
                                                <input type='number' value={dinheiro} placeholder='Dinheiro' onChange={(e) => {SetDinheiro(e.target.valueAsNumber);}}  className=''/>
                                            </div>
                                                <h3>Historia:</h3><br/>
                                            <div  className=''>    
                                                <textarea cols={80} rows={10} value={historia} onChange={(e) => {SetHistoria(e.target.value);}}  className=''/><br/>
                                            </div>
                                        </div>
                                 )}
                                {(pages == 6) && (<div>
                                    <button onClick={() => {SetPages(1)}}>X</button>
                                    <button onClick={() =>{SetPages(9);SetNewTipe(0)}}>New</button>
                                    {Truque?.map((use:NewTruque) => <div>{use.NameHab}</div>)}
                                </div>)}
                                {(pages == 7) && (<div>
                                    <button onClick={() => {SetPages(1)}}>X</button>
                                    <button onClick={() =>{SetPages(9);SetNewTipe(1)}}>New</button>
                                    {Tecnicas?.map((use:NewTruque) => <div>{use.NameHab}</div>)}
                                </div>)}
                                {(pages == 8) && (<div>
                                    <button onClick={() => {SetPages(1)}}>X</button>
                                    <button onClick={() =>{SetPages(9);SetNewTipe(2)}}>New</button>
                                    {SuperMovimento?.map((use:NewTruque) => <div>{use.NameHab}</div>)}
                                </div>)}  
                                {(pages == 9) && (
                                    <div>
                                        <form onSubmit={AttTruques}>
                                            <label htmlFor='NomedaHabilidade' className='mx-2'>Nome da Habilidade</label>
                                            <input id='NomedaHabilidade'  className='' type='text'   value={NomeHab} onChange={(e) => {SetNomeHab(e.target.value)}}/><br/>
                                            <label htmlFor='danoD20'>D20:</label>
                                            <input id='danoD20'  className='' type='number' value={Habd20} onChange={(e) => {SetHabd20(e.target.valueAsNumber)}}/>
                                            <label htmlFor='danoD12'>D12:</label>
                                            <input id='danoD12'  className='' type='number' value={Habd12} onChange={(e) => {SetHabd12(e.target.valueAsNumber)}}/>
                                            <label htmlFor='danoD10'>D10:</label>
                                            <input id='danoD10'  className='' type='number' value={Habd10} onChange={(e) => {SetHabd10(e.target.valueAsNumber)}}/><br/>
                                            <label htmlFor='danoD8'>D8:</label>
                                            <input id='danoD8'  className='' type='number' value={Habd8} onChange={(e) => {SetHabd8(e.target.valueAsNumber)}}/>
                                            <label htmlFor='danoD6'>D6:</label>
                                            <input id='danoD6'  className='' type='number' value={Habd6} onChange={(e) => {SetHabd6(e.target.valueAsNumber)}}/>
                                            <label htmlFor='danoD4'>D4:</label>
                                            <input id='danoD4'  className='' type='number' value={Habd4} onChange={(e) => {SetHabd4(e.target.valueAsNumber)}}/>
                                            <div>
                                                <input type="radio" id='Have' onChange={()=>SetHaveTest(true)}/>
                                                <label htmlFor="Have" className='mx-10'>Have</label>
                                                <input type="radio" id='DontHave' onChange={ ()=>SetHaveTest(false)} />
                                                <label htmlFor='DontHave' className='mx-10'>Don't Have</label>
                                            </div>
                                            <label htmlFor='CustoHabilidade' className='mx-2'>Custo</label>
                                            <input id='CustoHabilidade'className='bg-pink-200 my-3 w-48' type='number' value={HabCusto} onChange={(e) => {SetHabCusto(e.target.valueAsNumber)}}/><br/>
                                            <textarea  className='' value={HabExplain} onChange={(e)=> SetHabExplain(e.target.value)}></textarea><br/>
                                            <button className='p-1 bg-blue-700 rounded-t-sm'  type='submit'>Criar Truque</button>
                                        </form>
                                    </div>
                                )}
                        </div>
                    </form>
                </div>
            </div>);
}