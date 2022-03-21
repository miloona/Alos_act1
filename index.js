
var listing = { 
  'repeat(100)':{
   id: JG.objectId(),
  email() {
    return (
      _.snakeCase(this.profile.name) +
      '@' +
      'heli.com' 
      
    ).toLowerCase();
  },
  username() {
    return (_.words(this.profile.name)[0]+moment(this.profile.age).format('YY')).toLowerCase();

  },
    profile: 
  {
  index: JG.index(),
  name:     `${JG.firstName()} ${JG.lastName()}`,
  age: `${JG.integer(20, 60)}`,
  country: JG.country(),
  
    picture() {
    return (
           'http://placehold.it/32x32/picture/'+
      _.snakeCase(this.name) +'/'+
       _.snakeCase(this.index)
    ).toLowerCase();
  },
   email() {
    return (
      _.snakeCase(this.name) +
      '@' +
      'heli.com' 
    ).toLowerCase();},
    phone: `${numeral(JG.floating(30,120,6)).format('+00.00,00.00')}`,
  name_Helipaddy: `${JG.firstName()} `,
  expertise:JG.random('Beginner', 'professional'),
  Trip_price:`${numeral(JG.floating(30,120,2)).format('$0,0.00')}`,
  number_of_trips:parseInt(JG.floating(0,50, 2)),
   },
  
  
  trip:
  {
  time_to_go:JG.date(new Date(2020, 0, 1), new Date(2023, 0, 1)),
  go_to:JG.city(),
  flying_hours: parseInt(JG.floating(0,10, 2)),
  number_of_passengers:parseInt(JG.floating(0,7, 2)),
  Quality:JG.random('Good', 'Normal','Bad'),
  },

});
]
}

