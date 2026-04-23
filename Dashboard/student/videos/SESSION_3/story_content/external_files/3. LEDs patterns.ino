int x[] = {13, 12, 11, 10, 9, 8, 7, 6, 5}; 
int y = 0; 
int duration = 200; 
void setup() { 
  
  for (int i = 0; i< 9; i++) 
  { pinMode(x[i], OUTPUT); 
  } } 
void loop() {  
for (int i = 0; i< 9; i++) 
{ 
 digitalWrite(x[i], LOW); 
} 
digitalWrite(x[y], HIGH); 
delay(duration); 
y++;  
if (y > 8){ 
  y = 0; 
}
}
