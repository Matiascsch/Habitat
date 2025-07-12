interface HabitatInterface {
  direccion: string;
  tipo: "departamento" | "casa";
  habitaciones: number;
  banos: number;
  metrosCuadrados: number;
  patio?: boolean;
  balcon?: boolean;
  garage?: boolean;
}


class Habitat implements HabitatInterface {
  direccion: string;
  tipo: "departamento" | "casa";
  habitaciones: number;
  banos: number;
  metrosCuadrados: number;
  patio?: boolean;
  balcon?: boolean;
  garage?: boolean;

  constructor(builder: HabitatBuilder) {
    this.direccion = builder.direccion;
    this.tipo = builder.tipo;
    this.habitaciones = builder.habitaciones;
    this.banos = builder.banos;
    this.metrosCuadrados = builder.metrosCuadrados;
    this.patio = builder.patio;
    this.balcon = builder.balcon;
    this.garage = builder.garage;
  }

  success(): string {
    return `Has creado exitosamente el hábitat en ${this.direccion}`;
  }

  getData(): HabitatInterface {
    return {
      direccion: this.direccion,
      tipo: this.tipo,
      habitaciones: this.habitaciones,
      banos: this.banos,
      metrosCuadrados: this.metrosCuadrados,
      patio: this.patio,
      balcon: this.balcon,
      garage: this.garage,
    };
  }
}


class HabitatBuilder {
  direccion: string = "Sin dirección";
  tipo: "departamento" | "casa" = "departamento";
  habitaciones: number = 1;
  banos: number = 1;
  metrosCuadrados: number = 30;
  patio: boolean = false;
  balcon: boolean = false;
  garage: boolean = false;

  setDireccion(direccion: string): this {
    this.direccion = direccion;
    return this;
  }

  setTipo(tipo: "departamento" | "casa"): this {
    this.tipo = tipo;
    return this;
  }

  setHabitaciones(num: number): this {
    this.habitaciones = num;
    return this;
  }

  setBanos(num: number): this {
    this.banos = num;
    return this;
  }

  setMetrosCuadrados(m2: number): this {
    this.metrosCuadrados = m2;
    return this;
  }

  conPatio(): this {
    this.patio = true;
    return this;
  }

  conBalcon(): this {
    this.balcon = true;
    return this;
  }

  conGarage(): this {
    this.garage = true;
    return this;
  }

  build(): Habitat {
    return new Habitat(this);
  }
}


/* 
EJEMPLO DE USO:

const habitat = new HabitatBuilder()
  .setDireccion("Calle Falsa 123")
  .setTipo("casa")
  .setHabitaciones(3)
  .setBanos(2)
  .setMetrosCuadrados(100)
  .conPatio()
  .conGarage()
  .build();

console.log(casa.success());
// Output: Has creado exitosamente el hábitat en Calle Falsa 123

*/