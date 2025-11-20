class Etudiant {
    // TODO : compléter la classe
    nom 
    age
    section
       constructor(nom,age,section){
        this.nom = nom
        this.age = age
        this.section = section
    };
    description(){
        return `${this.nom} (${this.age} ans) - Section: ${this.section}`;
    }
}

module.exports = Etudiant; // si projet Node
// ou export default Etudiant; pour un projet front 