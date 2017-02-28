export function changeValue(e){
  console.log('changeValue')
  return {
      type: 'VALUE_CHANGED',    //A propriedade type é obrigatória. 
      payload: e.target.value  //é o dado que vem junto com a ação (valor novo)
  }
}
