const elements = [
  { atno: 1, name: 'hydrogen', symbol: 'H' }, 
  { atno: 2, name: 'helium', symbol: 'He' }, 
  { anto: 3, name: 'lithium', symbol: 'Li'},
  { atno: 4, name: 'beryllium', symbol: 'Be' }, 
  { atno: 5, name: 'boron', symbol: 'B'},
  { atno: 6, name: 'carbon', symbol: 'C'},
  { atno: 7, name: 'nitrogen', symbol: 'N'},
  { atno: 8, name: 'oxygen', symbol: 'O'},
  { atno: 9, name: 'fluorine', symbol: 'F'},
  { atno: 10, name: 'neon', symbol: 'Ne'},
  { atno: 11, name: 'sodium', symbol: 'Na'},
  { atno: 12, name: 'magnesium', symbol: 'Mg'},
  { atno: 13, name: 'aluminum', symbol: 'Al'},
  { atno: 14, name: 'silicon', symbol: 'Si'},
  { atno: 15, name: 'phosphorus', symbol: 'P'},
  { atno: 16, name: 'sulfur', symbol: 'S'},
  { atno: 17, name: 'chlorine', symbol: 'Cl'},
  { atno: 18, name: 'argon', symbol: 'Ar'},
  { atno: 19, name: 'potassium', symbol: 'K'},
  { atno: 20, name: 'calcium', symbol: 'Ca'},
  { atno: 21, name: 'scandium', symbol: 'Sc'},
  { atno: 22, name: 'titanium', symbol: 'Ti'},
  { atno: 23, name: 'vanadium', symbol: 'V'},
  { atno: 24, name: 'chromium', symbol: 'Cr'},
  { atno: 25, name: 'manganese', symbol: 'Mn'},
  { atno: 26, name: 'iron', symbol: 'Fe'},
  { atno: 27, name: 'cobalt', symbol: 'Co'},
  { atno: 28, name: 'nickel', symbol: 'Ni'},
  { atno: 29, name: 'copper', symbol: 'Cu'},
  { atno: 30, name: 'zinc', symbol: 'Zn'},
  { atno: 31, name: 'gallium', symbol: 'Ga'},
  { atno: 32, name: 'germanium', symbol: 'Ge'},
  { atno: 33, name: 'arsenic', symbol: 'As'},
  { atno: 34, name: 'selenium', symbol: 'Se'},
  { atno: 35, name: 'bromine', symbol: 'Br'},
  { atno: 36, name: 'krypton', symbol: 'Kr'},
  { atno: 37, name: 'rubidium', symbol: 'Rb'},
  { atno: 38, name: 'strontium', symbol: 'Sr'},
  { atno: 39, name: 'yttrium', symbol: 'Y'},
  { atno: 40, name: 'zirconium', symbol: 'Zr'},
  { atno: 41, name: 'niobium', symbol: 'Nb'},
  { atno: 42, name: 'molybdenum', symbol: 'Mo'},
  { atno: 43, name: 'technetium', symbol: 'Tc'},
  { atno: 44, name: 'ruthenium', symbol: 'Ru'},
  { atno: 45, name: 'rhodium', symbol: 'Rh'},
  { atno: 46, name: 'palladium', symbol: 'Pd'},
  { atno: 47, name: 'silver', symbol: 'Ag'},
  { atno: 48, name: 'cadmium', symbol: 'Cd'},
  { atno: 49, name: 'indium', symbol: 'In'},
  { atno: 50, name: 'tin', symbol: 'Sn'},
  { atno: 51, name: 'antimony', symbol: 'Sb'},
  { atno: 52, name: 'tellurium', symbol: 'Te'},
  { atno: 53, name: 'iodine', symbol: 'I'},
  { atno: 54, name: 'xenon', symbol: 'Xe'},
  { atno: 55, name: 'cesium', symbol: 'Cs'},
  { atno: 56, name: 'barium', symbol: 'Ba'},
  { atno: 57, name: 'lanthanum', symbol: 'La'},
  { atno: 58, name: 'cerium', symbol: 'Ce'},
  { atno: 59, name: 'praseodymium', symbol: 'Pr'},
  { atno: 60, name: 'neodymium', symbol: 'Nd'},
  { atno: 61, name: 'promethium', symbol: 'Pm'},
  { atno: 62, name: 'samarium', symbol: 'Sm'},
  { atno: 63, name: 'europium', symbol: 'Eu'},
  { atno: 64, name: 'gadolinium', symbol: 'Gd'},
  { atno: 65, name: 'terbium', symbol: 'Tb'},
  { atno: 66, name: 'dysprosium', symbol: 'Dy'},
  { atno: 67, name: 'holmium', symbol: 'Ho'},
  { atno: 68, name: 'erbium', symbol: 'Er'},
  { atno: 69, name: 'thulium', symbol: 'Tm'},
  { atno: 70, name: 'ytterbium', symbol: 'Yb'},
  { atno: 71, name: 'lutetium', symbol: 'Lu'},
  { atno: 72, name: 'hafnium', symbol: 'Hf'},
  { atno: 73, name: 'tantalum', symbol: 'Ta'},
  { atno: 74, name: 'tungsten', symbol: 'W'},
  { atno: 75, name: 'rhenium', symbol: 'Re'},
  { atno: 76, name: 'osmium', symbol: 'Os'},
  { atno: 77, name: 'iridium', symbol: 'Ir'},
  { atno: 78, name: 'platinum', symbol: 'Pt'},
  { atno: 79, name: 'gold', symbol: 'Au'},
  { atno: 80, name: 'mercury', symbol: 'Hg'},
  { atno: 81, name: 'thallium', symbol: 'Tl'},
  { atno: 82, name: 'lead', symbol: 'Pb'},
  { atno: 83, name: 'bismuth', symbol: 'Bi'},
  { atno: 84, name: 'polonium', symbol: 'Po'},
  { atno: 85, name: 'astatine', symbol: 'At'},
  { atno: 86, name: 'radon', symbol: 'Rn'},
  { atno: 87, name: 'francium', symbol: 'Fr'},
  { atno: 88, name: 'radium', symbol: 'Ra'},
  { atno: 89, name: 'actinium', symbol: 'Ac'},
  { atno: 90, name: 'thorium', symbol: 'Th'},
  { atno: 91, name: 'protactinium', symbol: 'Pa'},
  { atno: 92, name: 'uranium', symbol: 'U'},
  { atno: 93, name: 'neptunium', symbol: 'Np'},
  { atno: 94, name: 'plutonium', symbol: 'Pu'},
  { atno: 95, name: 'americium', symbol: 'Am'},
  { atno: 96, name: 'curium', symbol: 'Cm'},
  { atno: 97, name: 'berkelium', symbol: 'Bk'},
  { atno: 98, name: 'californium', symbol: 'Cf'},
  { atno: 99, name: 'einsteinium', symbol: 'Es'},
  { atno: 100, name: 'fermium', symbol: 'Fm'},
  { atno: 101, name: 'mendelevium', symbol: 'Md'},
  { atno: 102, name: 'nobelium', symbol: 'No'},
  { atno: 103, name: 'lawrencium', symbol: 'Lr'},
  { atno: 104, name: 'rutherfordium', symbol: 'Rf'},
  { atno: 105, name: 'dubnium', symbol: 'Db'},
  { atno: 106, name: 'seaborgium', symbol: 'Sg'},
  { atno: 107, name: 'bohrium', symbol: 'Bh'},
  { atno: 108, name: 'hassium', symbol: 'Hs'},
  { atno: 109, name: 'meitnerium', symbol: 'Mt'},
  { atno: 110, name: 'darmstadtium', symbol: 'Ds'},
  { atno: 111, name: 'roentgenium', symbol: 'Rg'},
  { atno: 112, name: 'copernicium', symbol: 'Cn'},
  { atno: 113, name: 'nihonium', symbol: 'Nh'},
  { atno: 114, name: 'flerovium', symbol: 'Fl'},
  { atno: 115, name: 'moscovium', symbol: 'Mc'},
  { atno: 116, name: 'livermorium', symbol: 'Lv'},
  { atno: 117, name: 'tennessine', symbol: 'Ts'},
  { atno: 118, name: 'oganesson', symbol: 'Og'}
]

export default elements;