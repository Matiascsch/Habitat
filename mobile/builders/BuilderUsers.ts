interface UsuarioInterface {
  nombre: string;
  apellido: string;
  email: string;
  edad?: number;
  telefono?: string;
  direccion?: string;
  esAdmin?: boolean;
}


class Usuario implements UsuarioInterface {
  nombre: string;
  apellido: string;
  email: string;
  edad?: number;
  telefono?: string;
  direccion?: string;
  esAdmin?: boolean;

  constructor(builder: UsuarioBuilder) {
    this.nombre = builder.nombre;
    this.apellido = builder.apellido;
    this.email = builder.email;
    this.edad = builder.edad;
    this.telefono = builder.telefono;
    this.direccion = builder.direccion;
    this.esAdmin = builder.esAdmin;
  }

  toJSON(): UsuarioInterface {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      edad: this.edad,
      telefono: this.telefono,
      direccion: this.direccion,
      esAdmin: this.esAdmin,
    };
  }

  success(): UsuarioInterface {
    return this.toJSON();
  }
}


class UsuarioBuilder {
  nombre: string = "";
  apellido: string = "";
  email: string = "";
  edad?: number;
  telefono?: string;
  direccion?: string;
  esAdmin?: boolean;

  setNombre(nombre: string): this {
    this.nombre = nombre;
    return this;
  }

  setApellido(apellido: string): this {
    this.apellido = apellido;
    return this;
  }

  setEmail(email: string): this {
    this.email = email;
    return this;
  }

  setEdad(edad: number): this {
    this.edad = edad;
    return this;
  }

  setTelefono(telefono: string): this {
    this.telefono = telefono;
    return this;
  }

  setDireccion(direccion: string): this {
    this.direccion = direccion;
    return this;
  }

  setAdmin(esAdmin: boolean = true): this {
    this.esAdmin = esAdmin;
    return this;
  }

  build(): Usuario {
    return new Usuario(this);
  }
}


/*
EJEMPLO DE USO:

const usuario = new UsuarioBuilder()
.setNombre("Juan")
.setApellido("Pérez")
.setEmail("juan.perez@email.com")
.setEdad(30)
.setTelefono("1123456789")
.setDireccion("Calle 123")
.setAdmin()
.build();

console.log(usuario.success());
console.log(usuario.toJSON());
*/