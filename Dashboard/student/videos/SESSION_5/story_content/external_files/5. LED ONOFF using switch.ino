int BUTTON = 2;
int LED = 13;
int BUTTONstate = 0;

void setup()
{
pinMode(BUTTON,INPUT);
pinMode(LED,OUTPUT);
}
void loop()
{
BUTTONstate = digitalRead(BUTTON);
if(BUTTONstate == HIGH)
{
digitalWrite(LED,LOW);
}
else{
digitalWrite(LED,HIGH);
}
}
