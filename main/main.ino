
#include <SoftwareSerial.h>

#define rxPin 11 // Broche 11 en tant que RX, à raccorder sur TX du HC-05
#define txPin 10 // Broche 10 en tant que TX, à raccorder sur RX du HC-05 
SoftwareSerial hc05(rxPin, txPin);

#define ledTest 5




void setup()
{
Serial.begin(9600); // intitialise la connexion série à travers l'alimentation

//Serial.begin(38400); 
//Serial.begin(74880); 

hc05.begin(9600); // intitialise la connexion série à travers le hc05

pinMode(A3,INPUT);
pinMode(ledTest,OUTPUT);

digitalWrite(ledTest, LOW);


}


void loop() {

  // Mis en commentaire suite au test 
  /*
  int readValue = analogRead(A3);

  Serial.println(readValue);
  //delay(5);

  if(readValue>310){
    digitalWrite(ledTest, HIGH);
    
  }
  else{
    digitalWrite(ledTest, LOW);

  }
  */

  

  if(hc05.available()){
    int givenNumber = hc05.read();
    Serial.write(givenNumber);

    if(givenNumber > 10){
      digitalWrite(ledTest, HIGH);
    }
    else{
      digitalWrite(ledTest, LOW);
    }
  }

  
}
