
class Routine {
    constructor(id, title, turno, horario, step1, step2, step3, step4, otros) {
      this.id = id.toString();
      this.title = title;
      this.turno = turno;
      this.horario = horario;
      this.step1 = step1;
      this.step2 = step2;
      this.step3 = step3;
      this.step4 = step4;
      this.otros = otros;
    
    }
  }
  
  export default Routine;