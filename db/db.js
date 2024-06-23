/*https://www.textfixer.com/tools/remove-line-breaks.php*/

export const questionsData = [
  {
    id: 1,
    text: "En un panel naranja de los que señalan un vehículo que transporta mercancía peligrosa, ¿dónde se indica el número ONU de identificación de la mercancía?",
    options: [
      "En la parte superior",
      "En la parte inferior",
      "En la parte derecha",
      "En la parte izquierda",
    ],
    correctAnswer: "B",
  },
  {
    id: 2,
    text: "Si en un transporte de mercancías peligrosas los paquetes llevan una etiqueta amarilla con una llama encima de un círculo en la esquina superior y un 5.1 en la inferior, se transporta una materia:",
    options: [
      "explosiva de la división 5.1",
      "explosiva y comburente",
      "comburente",
      "autoinflamab",
    ],
    correctAnswer: "C",
  },

  {
    id: 3,
    text: "Los paneles naranjas que identifican a los vehículos que transportan mercancías peligrosas:",
    options: [
      "siempre deben ir divididos por una línea negra horizontal",
      "únicamente deben ser utilizados por vehículos cisterna",
      "deben colocarse en todo vehículo que transporte mercancía peligrosa",
      "no deben colocarse salvo que el expedidor o fabricante lo soliciten",
    ],
    correctAnswer: "C",
  },

  {
    id: 4,
    text: "Antes de iniciar un transporte de mercancías peligrosas, el conductor:",
    options: [
      "no aceptará documentación alguna que no le sea entregada directamente por su empresa.",
      "recibirá del transportista la información necesaria para llevar a cabo las actuaciones contenidas en las instrucciones escritas.",
      "comprobará que la carta de porte esté en un idioma que pueda entender.",
      "rellenará la declaración de porte que establece el ADR.",
    ],
    correctAnswer: "B",
  },

  {
    id: 5,
    text: "Cuando en un recipiente que contiene mercancía peligrosa sea necesario indicar más de un peligro mediante las correspondientes etiquetas, ¿dónde se colocarán?",
    options: [
      "En caras opuestas.",
      "Una al lado de la otra.",
      "Sólo debe colocarse la etiqueta del peligro principal.",
      "En caras opuestas, pero indicando en su interior el número de etiquetas existentes.",
    ],
    correctAnswer: "B",
  },

  {
    id: 6,
    text: "En los paneles naranja que identifican a los vehículos que transportan mercancías peligrosas:",
    options: [
      "el número de identificación de peligro debe aparecer siempre.",
      "el número ONU de la mercancía debe aparecer siempre.",
      "el número de identificación de peligro y el número ONU deben aparecer siempre.",
      "únicamente se indica la identificación de peligro y el número ONU en determinados transportes y vehículos.",
    ],
    correctAnswer: "D",
  },

  {
    id: 7,
    text: "Si, en un recipiente que contiene mercancías peligrosas, la etiqueta de peligro es de color azul, contiene una llama en su vértice superior y en el inferior tiene el número 4, las mercancías:",
    options: [
      "son autorreactivas.",
      "son espontáneamente inflamables.",
      "son comburentes.",
      "desprenden gases inflamables en contacto con el agua.",
    ],
    correctAnswer: "D",
  },
  {
    id: 8,
    text: "Si, en un recipiente que contiene mercancías peligrosas, la etiqueta de peligro es de color rojo, contiene una llama en su vértice superior y en el inferior tiene el número 2, ¿de qué mercancía se trata?",
    options: [
      "Líquido inflamable.",
      "Sólido autorreactivo.",
      "Gas inflamable.",
      "Explosivo de división 2.",
    ],
    correctAnswer: "C",
  },
  {
    id: 9,
    text: "Si en un vehículo que transporta mercancías peligrosas vemos, en cada lateral, dos placas-etiquetas que indican 'materia corrosiva', ¿qué significa?",
    options: [
      "Transporta una mercancía muy corrosiva.",
      "Transporta varias materias corrosivas.",
      "Transporta dos materias de la Clase 8.",
      "Es un error, no debe repetirse la etiqueta de peligro.",
    ],
    correctAnswer: "D",
  },
  {
    id: 10,
    text: "Un camión caja cargado con mercancía peligrosa debe ir señalizado con:",
    options: [
      "un panel rectangular de color naranja situado en la parte trasera.",
      "dos paneles rectangulares naranja, uno situado en la parte trasera y otro en la delantera.",
      "cuatro paneles naranja situados en cada lado del vehículo.",
      "las etiquetas o placas-etiquetas de peligro que correspondan únicamente.",
    ],
    correctAnswer: "B",
  },
  {
    id: 11,
    text: "Un camión caja que transporta mercancía peligrosa a granel:",
    options: [
      "debe llevar indicado en el interior de los paneles naranja únicamente el número ONU.",
      "debe llevar indicado en el interior de los paneles naranja el número ONU y el número de identificación de peligro.",
      "no debe llevar ninguna indicación en el interior de los paneles.",
      "no debe llevar paneles naranja.",
    ],
    correctAnswer: "B",
  },
];

export const messagesData = [
  {
    grade: "honor",
    gradeText: "¡Excelente!",
    comment: "Sigue así y continúa con tu gran desempeño...",
  },
  {
    grade: "sobresaliente",
    gradeText: "¡Buen trabajo!",
    comment:
      "Has demostrado un buen conocimiento, pero aún puedes perfeccionar...",
  },
  {
    grade: "notable",
    gradeText: "Has aprobado, pero hay margen para mejorar",
    comment:
      "Sigue esforzándote y revisa los conceptos en los que tienes dudas...",
  },
  {
    grade: "reprovado",
    gradeText: "Lamentablemente, tu rendimiento ha sido insuficiente",
    comment:
      "Te recomendamos revisar los materiales y buscar ayuda adicional para mejorar...",
  },
];
