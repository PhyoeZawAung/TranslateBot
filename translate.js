

exports.TL = async function(message){
    const Translate = await import('translate');
    const data = await Translate.default(message,'Burmese');
    return data;
}
