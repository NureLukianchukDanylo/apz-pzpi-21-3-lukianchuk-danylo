#include <ESP32Servo.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <HTTPClient.h>
#include <uri/UriBraces.h>
#include <ArduinoJson.h>

#define LED_RED_PIN 4
#define LED_GREEN_PIN 5
#define BUTTON_GREEN_PIN 18
#define BUTTON_RED_PIN 34
#define SERVO_PIN 12
#define WIFI_SSID "Wokwi-GUEST"
#define WIFI_PASSWORD ""
#define WIFI_CHANNEL 6

WebServer server(80);
Servo s1;

int lastButtonGreenState = LOW;
int lastButtonRedState = LOW;

// Send response to server
void sendResponse(double coordinates[]) {
  StaticJsonDocument<2> data;
  data["latitude"] = coordinates[0];
  data["longitude"] = coordinates[1];
  String jsonString;
  //Serialize coordinates
  serializeJson(data, jsonString);
  server.send(200, "application/json", jsonString);
}

void GetCoordinates()
{
  double data[2];

  Serial.print("Enter latitude: ");
  while (!Serial.available()) {
    // Wait for user input
  }
  
  String input = Serial.readStringUntil('\n');
  Serial.println(input);
  
  try{
    data[0] = input.toDouble();
  }
  catch(double)
  {
    Serial.println("Incorrect latitude!");
  }

  Serial.print("Enter longitude: ");
  while (!Serial.available()) {
    // Wait for user input
  }

  input = Serial.readStringUntil('\n');
  Serial.println(input);

  try{
    data[1] = input.toDouble();
  }
  catch(double)
  {
    Serial.println("Incorrect longitude!");
  }

  delay(100);

  sendResponse(data);
}

void setup(void) {
  Serial.begin(115200);

  pinMode(LED_RED_PIN, OUTPUT);
  pinMode(LED_GREEN_PIN, OUTPUT);
  pinMode(BUTTON_GREEN_PIN, INPUT);
  pinMode(BUTTON_RED_PIN, INPUT);
  s1.attach(SERVO_PIN);

  // Connect to wifi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD, WIFI_CHANNEL);
  Serial.print("Connecting to WiFi ");
  Serial.print(WIFI_SSID);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }
  Serial.println("Connected!");

  // Handle request to get coordinates
  server.on(UriBraces("/get-coordinates"), HTTP_GET, GetCoordinates);
  // Start webserver
  server.begin();
  
  Serial.println("HTTP server started");
}

void loop(void) {
  server.handleClient();
  int buttonGreenState = digitalRead(BUTTON_GREEN_PIN);
  int buttonRedState = digitalRead(BUTTON_RED_PIN);
  //Wait for button to be pressed
  if (buttonGreenState != lastButtonGreenState)
  {
    HTTPClient http;
    http.begin("https://lmpz5drw-5001.euw.devtunnels.ms/api/SmartBracelet/smart-bracelet/1/grant-access");
    //Send request to API
    int httpResponseCode = http.GET();
    //Process succesful response
    if(httpResponseCode > 0)
    {
      String response = http.getString();
      Serial.println(response);
      digitalWrite(LED_GREEN_PIN, HIGH);
      s1.write(180);
      delay(3000);
      digitalWrite(LED_GREEN_PIN, LOW);
      s1.write(90);
      delay(3000);
    }
    //Process error
    else
    {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
      digitalWrite(LED_RED_PIN, HIGH);
      delay(1000);
      digitalWrite(LED_RED_PIN, LOW);
      delay(1000);
    }
    lastButtonGreenState = buttonGreenState;
  }
  if (buttonRedState != lastButtonRedState)
  {
    HTTPClient http;
    http.begin("https://lmpz5drw-5001.euw.devtunnels.ms/api/SmartBracelet/smart-bracelet/-1/grant-access");
    //Send request to API
    int httpResponseCode = http.GET();
    //Process succesful response
    if(httpResponseCode > 0)
    {
      String payload = http.getString();
      Serial.println(payload);
    }
    //Process error
    else
    {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }
    digitalWrite(LED_RED_PIN, HIGH);
    delay(1000);
    digitalWrite(LED_RED_PIN, LOW);
    delay(1000);
    lastButtonRedState = buttonRedState;
  }
}