/*
    COdigo procesamiento de lenguaje
*/

const palabrasPositivas = [
    "amo", "encanta", "encantaaaa!", "gran", "arte", "rifas", "fans", "apoyo", "te quiero", "te amo", 
    "suscriptor", "me gusta", "joya", "espero", "excelente", "buen", "buenísimo", "maravilloso", 
    "increíble", "feliz", "amado", "bello", "maravillosa", "buenísima", "adoro", "hermosa", 
    "alegría", "bonito", "perfecto", "genial", "placer", "fascina", "enamorado", "divertido", 
    "agradable", "sorprendente", "destacado", "positivo", "asombroso", "satisfecho", "contento", 
    "felicidad", "éxito", "motivado", "optimista", "afortunado", "encantador", "seguro", 
    "confiado", "lindo", "amistoso", "cariñoso", "respetuoso", "generoso", "apreciado", 
    "apasionado", "impresionante", "valiente", "único", "afable", "auténtico", "creativo", 
    "comprometido", "innovador", "reconocido", "valioso", "importante", "enriquecedor", 
    "dinámico", "diversión", "fantástico", "extraordinario", "triunfo", "prometedor", 
    "armonioso", "logrado", "genialidad", "original", "excepcional", "bendecido", "campeón", 
    "visionario", "libre", "solidario", "amigable", "enérgico", "fiable", "valeroso", 
    "orgulloso", "perseverante", "emotivo", "solidaridad", "esperanza", "profundo", 
    "brillante", "honesto", "equilibrado", "carismático", "amigable", "mágico", "caritativo", 
    "sabio", "valentía"
];

const palabrasNegativas = [
    "odio", "malo", "triste", "horrible", "terrible", "pésimo", "fatal", "desagradable", 
    "aburrido", "decepción", "decepcionante", "feo", "desastroso", "malísimo", "aburrida", 
    "insatisfactorio", "patético", "molesto", "inaceptable", "crítico", "desesperante", 
    "fallido", "penoso", "queja", "desventaja", "lamentable", "deprimente", "frustrante", 
    "inútil", "innecesario", "insuficiente", "falso", "ineficiente", "desgaste", "pesado", 
    "desconfianza", "lastimoso", "inepto", "débil", "excesivo", "superficial", "incompetente", 
    "desleal", "egoísta", "traidor", "injusto", "deshonesto", "déspota", "infeliz", 
    "vulgar", "irritante", "traicionero", "repugnante", "grosero", "rencoroso", "tóxico", 
    "destructivo", "desesperante", "insensible", "miserable", "arrogante", "abusivo", 
    "autoritarismo", "vacío", "superficial", "deficiente", "perdido", "inhumano", 
    "amargado", "abrumador", "odioso", "cansado", "deteriorado", "monótono", "tonto", 
    "desinteresado", "ridículo", "nauseabundo", "reclamo", "corrupto", "mediocre", 
    "perjudicial", "desmotivador", "estancado", "absurdo", "estresante", "sufrimiento", 
    "innecesario", "viciado", "injusticia", "decadente", "irresponsable", "incapaz", 
    "inseguro", "frío", "despectivo", "apático", "cerrado", "deshonrado"
];


function analizarComentario(comentario) {
    const palabras = comentario.toLowerCase().split(/\s+/);
    let positivas = 0;
    let negativas = 0;

    palabras.forEach(palabra => {
        if (palabrasPositivas.includes(palabra)) {
            positivas++;
        }
        if (palabrasNegativas.includes(palabra)) {
            negativas++;
        }
    });

    if (positivas > negativas) {
        return "Positivo";
    } else if (negativas > positivas) {
        return "Negativo";
    } else {
        return "Neutral";
    }
}   

function writeResult() {
    const resultados = comentarios.map(analizarComentario);
    console.log(resultados);
    let resultadoC = document.getElementById("resultados");
    for (let i = 0; i < comentarios.length; i++) {

        resultadoC.innerHTML += `<li><b>${resultados[i]}</b>: ${comentarios[i]}</li>`;
        
    }
    active('result');
}


