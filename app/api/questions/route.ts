import { NextResponse } from 'next/server'

export const GET = async () => {
  const questions = [
    {
      text: "Which protocol is used to transfer web pages over the internet?",
      options: ["HTTP", "FTP", "SMTP", "SSH"]
    },
    {
      text: "Which device is used to connect different networks together?",
      options: ["Router", "Switch", "Hub", "Repeater"]
    },
    {
      text: "What does the IP in IP address stand for?",
      options: ["Internet Protocol", "Internal Process", "Information Package", "Interface Point"]
    },
    {
      text: "Which layer of the OSI model is responsible for end-to-end communication?",
      options: ["Transport", "Network", "Data Link", "Application"]
    },
    {
      text: "Which port is used by the HTTPS protocol?",
      options: ["443", "80", "21", "25"]
    },
    {
      text: "What is the maximum length of an IPv4 address in bits?",
      options: ["32", "64", "128", "256"]
    },
    {
      text: "Which protocol is used to send emails?",
      options: ["SMTP", "POP3", "HTTP", "FTP"]
    },
    {
      text: "Which topology has a central node to which all devices are connected?",
      options: ["Star", "Ring", "Bus", "Mesh"]
    },
    {
      text: "What is the function of a DNS server?",
      options: ["Translate domain names to IP addresses", "Secure network traffic", "Control access to the network", "Route data packets"]
    },
    {
      text: "Which of the following is a private IP address?",
      options: ["192.168.1.1", "172.32.45.7", "8.8.8.8", "1.1.1.1"]
    },
    {
      text: "Which type of attack involves intercepting network traffic?",
      options: ["Man-in-the-Middle", "DDoS", "Phishing", "SQL Injection"]
    },
    {
      text: "Which protocol is used to transfer files between a client and a server?",
      options: ["FTP", "HTTP", "SMTP", "DHCP"]
    },
    {
      text: "Which layer of the OSI model deals with physical media like cables and switches?",
      options: ["Physical", "Data Link", "Network", "Transport"]
    },
    {
      text: "Which of the following is an example of a connectionless protocol?",
      options: ["UDP", "TCP", "FTP", "SMTP"]
    },
    {
      text: "What does MAC stand for in networking?",
      options: ["Media Access Control", "Message Authentication Code", "Multiple Access Channel", "Main Access Channel"]
    }
  ]

  return NextResponse.json(questions)
}
