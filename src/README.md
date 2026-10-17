Ejercicio 4: Características de OOP utilizadas

En ambos ejercicios se aplica encapsulamiento y abstracción. No se usa herencia ni polimorfismo.

Encapsulamiento (sí). Se agrupan los datos y comportamiento en un mismo objeto.

En la calculadora, la clase Calculadora agrupa operando1, operando2 y operador junto con el método calcular() que trabaja sobre ellos.
En la lista de tareas, ListaDeTareas encierra el array this.tareas junto con los métodos que lo manejan (agregarTarea, buscarTarea, modificarTarea, etc.). Ya no hay un array suelto y global.

Abstracción (sí, simple). Quien usa el objeto no necesita saber cómo resuelve las cosas por dentro. Al llamar calculadora.calcular() solo importa el resultado, no el switch interno. Lo mismo con tarea.mostrarDificultad(), que traduce "facil" a * sin que el menú sepa cómo. No usamos modificadores de privacidad (private), porque para este nivel no hacían falta.

Herencia (no). No la necesitamos porque no hay variantes de Tarea o de Calculadora que compartan una base y agreguen comportamiento propio. Forzar una jerarquía, por ejemplo TareaUrgente extends Tarea, sería agregar complejidad sin necesidad real.

Polimorfismo (no). No lo necesitamos porque no hay varias clases que respondan al mismo método de formas distintas. Cada programa tiene un solo tipo de objeto principal, y el polimorfismo requiere al menos dos tipos relacionados por herencia o por una interfaz común.
