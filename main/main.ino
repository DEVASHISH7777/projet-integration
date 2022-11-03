/*
#include <SoftwareSerial.h>

#define rxPin 11 // Broche 11 en tant que RX, à raccorder sur TX du HC-05
#define txPin 10 // Broche 10 en tant que TX, à raccorder sur RX du HC-05 
SoftwareSerial mySerial(rxPin, txPin);

*/




void setup()
{
Serial.begin(9600); // intitialise la connexion série
//Serial.begin(38400); // intitialise la connexion série
//Serial.begin(74880); // intitialise la connexion série

pinMode(A0,INPUT);


}


void loop() {
  int readValue = analogRead(A0);

  Serial.println(readValue);
  //delay(5);

}
