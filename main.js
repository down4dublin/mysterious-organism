// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
  compareDNA(dnaStrandComp){
  let equalCount =0;
  let dna1= this.dna;
  let dna2= dnaStrandComp.dna;
  for(let i =0; i<dna1.length; i++){
    if(dna1[i]===dna2[i]){
      equalCount++;
    }
  }
let percentMatch = (100 *(equalCount/dna2.length)).toFixed(2);
console.log(`Specimen #${this.specimenNum} and specimen #${dnaStrandComp.specimenNum} have ${percentMatch}% in common`) 
},
    
complementStrand(){
  let complementArr=[];
  let n;
  let dnaArr = this.dna;
  for(let i =0; i <dnaArr.length; i++){
    if(dnaArr[i]=='A'){
      complementArr.push('T')
    }
    else if(dnaArr[i]=='T'){
      complementArr.push('A')
    }
    else if(dnaArr[i]=='C'){
      complementArr.push('G')
    }
    else if(dnaArr[i]=='G'){
      complementArr.push('C')
    }
  }
  return complementArr;
},
    
willLikelySurvive(){
  let dna1 = this.dna;
  let c_count = 0;
  let g_count=0;
  for(let i =0; i<dna1.length; i++){
    if(dna1[i]==='C'){
      c_count++;
    }
    else if(dna1[i]==='G'){
      g_count++;
    }
  }
  let g_percentMatch = (100 *(g_count/dna1.length)).toFixed(2);
  let c_percentMatch = (100 *(c_count/dna1.length)).toFixed(2);
  if(g_percentMatch >=60 || c_percentMatch >=60)
    return true;
  else 
    return false;
}
  }
}
/*responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. */

const mutate = (dnaStrand) => {
  const dnaBase = dnaStrand[Math.floor(Math.random() * dnaStrand.length)];
  let randBase=0;
  do{ 
    randBase = returnRandBase();
  }
  while(dnaBase === randBase);
}

let pAequor1 = pAequorFactory(5,['C','T','C','A','C','G','A','C','C','C','G','C','C','A','C'])
let pAequor2 = pAequorFactory(4,['A','C','G','A','T','C','G','G','C','T','A','T','C','A','G'])

let collectpAequor = [];
let tempDNAarr;
let count =1;
while(collectpAequor.length<30){
  tempDNAarr = pAequorFactory(count, mockUpStrand());
  if(tempDNAarr.willLikelySurvive()){
   collectpAequor.push(tempDNAarr)
    count++;
  }  
}

let dnaArr3 = collectpAequor[2].dna
console.log(dnaArr3)
console.log(collectpAequor[2].complementStrand())








