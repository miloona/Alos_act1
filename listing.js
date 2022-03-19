var listing_1 = { 
  'repeat(100)':{
  'profile': [{
  id: {{objectId()}},
  index: {{index()}},
  Helicopter_captain_name:{{firstName()}{lastName()}}`,
  Date_of_birth:{{date()}},
  country: {{country()}},
  name_Helipaddy:{{firstName()}} `,
  expertise:{{random('Beginner', 'professional')}},
  Trip_price:{{numeral(floating(30,120,2)).format('$0,0.00')}}`,
  number_of_trips:{{parseInt(floating(0,50, 2))}},
   },
 trip:{
  
  time_to_go:{{date()}},
  go_to:{{city()}},
  flying_hours: {{parseInt(floating(0,10, 2))}},
  number_of_passengers:{{parseInt(floating(0,7, 2))}},
  Quality:{{random('Good', 'Normal','Bad')}},
  },
  
]
}
