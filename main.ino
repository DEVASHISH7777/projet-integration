#include <SoftwareSerial.h>

#define rxPin 11 // Broche 11 en tant que RX, à raccorder sur TX du HC-05
#define txPin 10 // Broche 10 en tant que TX, à raccorder sur RX du HC-05 
SoftwareSerial mySerial(rxPin, txPin);

void setup()
{
// define pin modes for tx, rx pins: pinMode(rxPin, INPUT); pinMode(txPin, OUTPUT); mySerial.begin(38400); Serial.begin(38400);
}
void loop() {
int i = 0;
char someChar[32] = {0};
// when characters arrive over the serial port... 
if(Serial.available()) {
  do{
  someChar[i++] = Serial.read();
  delay(3);
  }
  while (Serial.available() > 0);
  mySerial.println(someChar);
  Serial.println(someChar); }
  while(mySerial.available()) 
    Serial.print((char)mySerial.read());
}
