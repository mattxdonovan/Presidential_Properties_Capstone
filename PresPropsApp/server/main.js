import { Meteor } from 'meteor/meteor';


import { Apartments } from '../imports/api/apartments';
import { Favorites } from '../imports/api/favorites';
import '../imports/api/users';

Meteor.startup(() => {
  if (Apartments.find().count() === 0) {
    const apartments = [{
      'title': 'Newly Renovated Back Bay 1 Bedroom Available December 1', 'price': '$2,500.00', 'bedrooms': '1' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/733b5bba.jpg', image1:'http://yourbostonapartments.com/wp-content/uploads/2016/11/733b5bba.jpg', image2:'http://yourbostonapartments.com/wp-content/uploads/2016/11/733b5bbb.jpg', image3:'http://yourbostonapartments.com/wp-content/uploads/2016/11/733b5bbc.jpg', image4:'http://yourbostonapartments.com/wp-content/uploads/2016/11/733b5bbd.jpg', image5:'http://yourbostonapartments.com/wp-content/uploads/2016/11/733b5bbe.jpg', image6:'http://yourbostonapartments.com/wp-content/uploads/2016/11/733b5bbf.jpg',
    }, {
      'title': 'Large Back Bay 2 Bed/ 2 Bath w/ Private Deck Available NOW!', 'price': '$4,500.00', 'bedrooms': '2' ,'bathrooms': '2' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/241b1bba.jpg', image1:'http://yourbostonapartments.com/wp-content/uploads/2016/11/241b1bba.jpg', image2:'http://yourbostonapartments.com/wp-content/uploads/2016/11/241b1bbb.jpg', image3:'http://yourbostonapartments.com/wp-content/uploads/2016/11/241b1bbc-427x570.jpg', image4:'http://yourbostonapartments.com/wp-content/uploads/2016/11/241b1bbd.jpg', image5:'http://yourbostonapartments.com/wp-content/uploads/2016/11/241b1bbe.jpg', image6:'http://yourbostonapartments.com/wp-content/uploads/2016/11/241b1bbf-850x570.jpg', image7:'http://yourbostonapartments.com/wp-content/uploads/2016/11/241b1bbg.jpg', image8:'http://yourbostonapartments.com/wp-content/uploads/2016/11/241b1bbh.jpg'
    }, {
      'title': 'Fenway Studio Available January 1', 'price': '$1,575.00', 'bedrooms': '1' ,'bathrooms': 'Apartment' , 'type': 'For Rent' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/55CQFENKENA-1.jpg'
    }, {
      'title': 'Large Back Bay 1 Bedroom Available February 1', 'price': '$2,975.00', 'bedrooms': '1' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/491b3bba-1-660x600.jpg'
    }, {
      'title': 'Pet Friendly 1 Bedroom Available December 15 or January 1', 'price': '$1,500.00', 'bedrooms': '1' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/62ch3ba.jpg'
    }, {
      'title': 'Spacious Fenway 2 Bedroom Available NOW', 'price': '$3,000.00', 'bedrooms': '2' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/54mbha.jpg'
    }, {

      'title': 'Store Front Commercial Property For Rent Available September 1', 'price': '$3,500.00', 'bedrooms': 'Commercial' ,'bathrooms': 'For Rent' , 'type': '' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/24joycom-660x600.jpg'
    }, {

      'title': 'NO BROKER FEE Back Bay Huge Studio Available January 1', 'price': '$1,850.00', 'bedrooms': '1' ,'bathrooms': 'Apartment' , 'type': 'For Rent' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/9856bbba.jpg'
    }, {

      'title': 'Fenway Studio Available February 1', 'price': '$1,500.00', 'bedrooms': '1' ,'bathrooms': 'Apartment' , 'type': 'For Rent' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/15q91fekee-427x600.jpg'
    }, {

      'title': 'Fenway Studio Available February 1', 'price': '$1,700.00', 'bedrooms': '1' ,'bathrooms': 'Apartment' , 'type': 'For Rent' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/111qubkefea-660x600.jpg'
    }, {

      'title': 'Fenway Studio Available February 1', 'price': '$1,600.00', 'bedrooms': '1' ,'bathrooms': 'Apartment' , 'type': 'For Rent' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/5561qu01fekea-660x600.jpg'
    }, {

      'title': 'Beacon Hill 1 Bedroom Available January 1', 'price': '$2,150.00', 'bedrooms': '1' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/55R4BHA.jpg'
    }, {

      'title': 'Fenway 1 Bedroom Available February 1', 'price': '$1,975.00', 'bedrooms': '1' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/02GCFEKEA-427x600.jpg'
    }, {

      'title': 'Fully Renovated 2BR Avail 11/15 with Private Roof Deck!', 'price': '$3,000.00', 'bedrooms': '2' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/215fnea1-660x600.jpg'
    }, {

      'title': 'Beacon Hill 2 Bedroom Available Now or December 1', 'price': '$2,650.00', 'bedrooms': '2' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/80119mbha-2-660x600.jpg'
    }, {

      'title': 'Large Beacon Hill 2 Bedroom Available NOW', 'price': '$2,800.00', 'bedrooms': '2' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/93JCBHA.jpg'
    }, {

      'title': 'Brookline 1 Bedroom Available January 1', 'price': '$2,350.00', 'bedrooms': '1' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/10/4041b3nea.jpg'
    }, {

      'title': 'Fenway 2 Bedroom Available NOW or December 1', 'price': '$2,525.00', 'bedrooms': '2' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/10/701q01fekea.jpg'
    }, {

      'title': 'Fully Renovated Fenway 1 Bedroom Available December 1', 'price': '$2,075.00', 'bedrooms': '1' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/10/15q02fekea.jpg'
    }, {

      'title': 'Fenway Studio Available January 1', 'price': '$1,550.00', 'bedrooms': '1' ,'bathrooms': 'Apartment' , 'type': 'For Rent' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/10/911p24kefea.jpg'
    }, {

      'title': 'Brookline Beacon Street Studio Available June 1', 'price': '$1,850.00', 'bedrooms': '1' ,'bathrooms': 'Apartment' , 'type': 'For Rent' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/10/8472b8brooka1.jpg'
    }, {

      'title': 'Back Bay Spacious 1Bedroom Apartment Available Jan 1', 'price': '$2,550.00', 'bedrooms': '1' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/10/771M6BBA.jpg'
    }, {

      'title': '**NO BROKER** Back Bay Renovated 1Bedroom for Rent Available January 1', 'price': '$3,100.00', 'bedrooms': '1' ,'bathrooms': '1' , 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/11/5918cbba-660x600.jpg'
    }, {

      'title': 'Hyannisport Spacious Renovated 3Bedroom for Sale', 'price': '$379,500.00', 'bedrooms': '3' ,'bathrooms': '1' , 'type': 'Single Family Home' , 'status': 'For Sale' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/10/70FIDHB1-660x600.jpg'
    }, {

      'title': 'Beacon Hill Large 1Bedroom for Rent Available December 1', 'price': '$2,450.00', 'bedrooms': 1,'bathrooms': 1, 'type': 'Apartment' , 'status': 'For Rent' , 'piclink': 'http://yourbostonapartments.com/wp-content/uploads/2016/09/86m01bha.jpg'
    }];

    apartments.forEach((apartment) => {
      Apartments.insert(apartment)
    });
  }
});
