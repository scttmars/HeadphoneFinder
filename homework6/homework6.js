function setFilter(){
  value = document.getElementById("browser").value;
  //alert(value);
  //window.location.reload();

  if(value === "kids"){

    //document.location.reload();
    removeElement("headphone1");
    removeElement("headphone2");
    removeElement("headphone3");
    removeElement("headphone4");
    removeElement("headphone5");
    removeElement("headphone7");
    removeElement("headphone8");
    removeElement("headphone9");
    removeElement("headphone11");
    removeElement("headphone12");
    removeElement("headphone13");
    removeElement("headphone15");
    removeElement("headphone16");
    removeElement("headphone17");
    removeElement("headphone18");
    removeElement("headphone20");
  }
  if(value === "wireless"){
    //document.location.reload(true);

    removeElement("headphone1");
    removeElement("headphone4");
    removeElement("headphone6");
    removeElement("headphone10");
    removeElement("headphone14");
    removeElement("headphone16");
    removeElement("headphone18");
    removeElement("headphone19");
    removeElement("headphone20");
    //document.location.reload(true);
  }

  if(value === "wired"){
    //document.location.reload(true);

    removeElement("headphone2");
    removeElement("headphone3");
    removeElement("headphone5");
    removeElement("headphone7");
    removeElement("headphone8");
    removeElement("headphone9");
    removeElement("headphone11");
    removeElement("headphone12");
    removeElement("headphone13");
    removeElement("headphone14");
    removeElement("headphone15");
    removeElement("headphone17");

  }

  if(value === "under50"){
    //document.location.reload(true);

    removeElement("headphone2");
    removeElement("headphone7");
    removeElement("headphone8");
    removeElement("headphone9");
    removeElement("headphone12");
    removeElement("headphone13");
    removeElement("headphone16");
    removeElement("headphone17");
    removeElement("headphone18");


  }



  if(value === "none"){
    document.location.reload(true);
  }

}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function headphoneFinder(){
  value1 = document.getElementById("wireType").value;
  value2 = document.getElementById("price").value;
  value3 = document.getElementById("brand").value;
  var div = document.getElementById("chosenHeadphone");
  div.innerHTML = '';
  if(value1 === "wired"){
    if(value3 === "sony"){

      if(value2 === "less100"){
        //alert("made it");
        div.innerHTML += '<img src="headphone18.jpg" alt="headphones" style="width:100%"> <h1>Sony MDR7506 Professional Headphone</h1> <p class="price">$79.99</p> <p>Neodymium magnets and 40 millimeter drivers for powerful, detailed sound Closed ear design provides comfort and outstanding reduction of external noises 9.8 foot cord ends in gold plated plug and it is not detachable</p> <a href="https://www.amazon.com/Sony-MDR7506-Professional-Diaphragm-Headphone/dp/B000AJIF4E/ref=sr_1_31?keywords=headphones&qid=1575333989&sr=8-31">Purchase</a>'
      }
      if(value2 === "grt100"){
        div.innerHTML += '<img src="headphone22.jpg" alt="headphones" style="width:100%;" > <h1>Sony MDRV6 Studio Monitor</h1> <p class="price">$149.99</p> <p>Connectivity Technology: Wired Neodymium magnets and 40mm drivers for powerful, detailed sound Over-ear design provides comfort and outstanding reduction of external noises 10-foot oxygen free copper cord ends in 3.5mm plug; 1/4-inch adapter included</p> <a href="https://www.amazon.com/Sony-MDRV6-Studio-Monitor-Headphones/dp/B00001WRSJ/ref=sr_1_13?keywords=wired+sony+headphones&qid=1575422777&sr=8-13">Purchase</a>'
      }
    }
    if(value3 === "bose"){

      if(value2 === "less100"){
        div.innerHTML += '<img src="headphone23.jpg" alt="headphones" style="width:100%;" > <h1>Bose SoundSport in-Ear Headphones</h1> <p class="price">$72.99</p> <p>Deep, clear sound enhanced by exclusive TriPort technology for crisp highs and natural-sounding lows Proprietary Stay Hear tips, in three sizes, conform to your ears shape to stay comfortably in place all day</p> <a href="https://www.amazon.com/Bose-SoundSport-Headphones-Apple-Devices/dp/B014CI8V1U/ref=sxin_2_ac_d_pm?ac_md=3-0VW5kZXIgJDEwMA%3D%3D-ac_d_pm&crid=2KSR8Y91MVBYR&keywords=bose+headphones&pd_rd_i=B014CI8V1U&pd_rd_r=16d95f89-faa9-4ede-b055-6117cc6fa423&pd_rd_w=HWvCl&pd_rd_wg=RqkJP&pf_rd_p=02e79b16-eab7-4369-852f-d04a58a4d9b5&pf_rd_r=GRFE46ZXN724PSR2T2KB&psc=1&qid=1575423011&sprefix=bose+hea%2Caps%2C152">Purchase</a>'
      }
      if(value2 === "grt100"){
        div.innerHTML += '<img src="headphone24.jpg" alt="headphones" style="width:100%;" > <h1>Bose QuietComfort 25 Acoustic Noise</h1> <p class="price">$129.99</p> <p>Apple compatible devices Applies to: QC 25 noise cancelling headphones Apple devices The remote and mic are compatible with the following Apple devices</p> <a href="https://www.amazon.com/Bose-QuietComfort-Acoustic-Cancelling-Headphones/dp/B00M1NEUKK/ref=sxin_2_ac_d_pm?ac_md=4-1-QmV0d2VlbiAkMTAwIGFuZCAkMTUw-ac_d_pm&crid=2KSR8Y91MVBYR&keywords=bose+headphones&pd_rd_i=B00M1NEUKK&pd_rd_r=16d95f89-faa9-4ede-b055-6117cc6fa423&pd_rd_w=HWvCl&pd_rd_wg=RqkJP&pf_rd_p=02e79b16-eab7-4369-852f-d04a58a4d9b5&pf_rd_r=GRFE46ZXN724PSR2T2KB&psc=1&qid=1575423011&smid=ATVPDKIKX0DER&sprefix=bose+hea%2Caps%2C152">Purchase</a>'
      }
    }
    if(value3 === "beats"){

      if(value2 === "less100"){
        div.innerHTML += '<img src="headphone25.jpg" alt="headphones" style="width:100%;" > <h1>Beats EP Wired On-Ear Headphone</h1> <p class="price">$79.99</p> <p>Three levels of world-class noise cancellation for better listening experience in any environment Alexa-enabled for voice access to music, information, and more Noise</p> <a href="https://www.amazon.com/Beats-EP-On-Ear-Headphones-Black/dp/B01LX8OJMT/ref=sr_1_3?crid=1XGU2G40SWW1R&keywords=beats+wired+headphones&qid=1575423574&sprefix=beats+wired%2Caps%2C134&sr=8-3">Purchase</a>'
      }
      if(value2 === "grt100"){
        div.innerHTML += '<img src="headphone26.jpg" alt="headphones" style="width:100%;" > <h1>Beats Executive Wired Headphone</h1> <p class="price">$119.99</p> <p>Three levels of world-class noise cancellation for better listening experience in any environment Alexa-enabled for voice access to music, information, and more Noise</p> <a href="https://www.amazon.com/Beats-Executive-Wired-Headphone-Renewed/dp/B0145CC7I6/ref=sr_1_8?crid=1XGU2G40SWW1R&keywords=beats+wired+headphones&qid=1575423574&sprefix=beats+wired%2Caps%2C134&sr=8-8">Purchase</a>'
      }
    }
  }

  else{
    if(value3 === "sony"){

      if(value2 === "less100"){
        div.innerHTML += '<img src="headphone7.jpg" alt="headphones" style="width:100%"> <h1>Sony WH-CH700N Wireless Bluetooth Noise Canceling</h1> <p class="price">$79.99</p> <p>DIGITAL NOISE CANCELLING: Blocks out distracting background noise for a better music experience AI POWERED: Hold the NC button for uniquely tuned noise cancellation courtesy of next gen AI tech</p> <a href="https://www.amazon.com/Sony-WH-CH700N-Canceling-Headphones-WHCH700N/dp/B079GPFLT1/ref=sr_1_13?keywords=headphones&qid=1575330842&smid=ATVPDKIKX0DER&sr=8-13">Purchase</a>'
      }
      if(value2 === "grt100"){
        div.innerHTML += '<img src="headphone13.jpg" alt="headphones" style="width:100%"> <h1>Sony Noise Cancelling Headphones WH1000XM3</h1> <p class="price">$277.99</p> <p>DIGITAL NOISE CANCELING: Industry leading ANC lends a personalized, virtually soundproof experience VOICE ASSISTANT: Alexa enabled for voice access to music, information and more. Activate with a simple touch</p> <a href="https://www.amazon.com/Sony-Noise-Cancelling-Headphones-WH1000XM3/dp/B07G4MNFS1/ref=sr_1_22?keywords=headphones&qid=1575333989&smid=ATVPDKIKX0DER&sr=8-22">Purchase</a>'
      }
    }
    if(value3 === "bose"){

      if(value2 === "less100"){
        div.innerHTML += '<img src="headphone8.jpg" alt="headphones" style="width:100%"> <h1>Bose SoundLink Around Ear</h1> <p class="price">$79.99</p> <p>Deep, immersive sound, improved EQ best in class performance for wireless headphones. Connectivity Technology: Wired/Wireless Latest Bluetooth technology for easy connectivity and seamless</p> <a href="https://www.amazon.com/Bose-SoundLink-around-ear-wireless-headphones/dp/B0117RGG8E/ref=sr_1_15?keywords=headphones&qid=1575330842&smid=ATVPDKIKX0DER&sr=8-15">Purchase</a>'
      }
      if(value2 === "grt100"){
        div.innerHTML += '<img src="headphone2.jpg" alt="headphones" style="width:100%;" > <h1>Bose QuietComfort 35</h1> <p class="price">$279.99</p> <p>Three levels of world-class noise cancellation for better listening experience in any environment Alexa-enabled for voice access to music, information, and more Noise</p> <a href="https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B0756CYWWD/ref=sxin_4_osp21-bc0957bb_cov?ascsubtag=bc0957bb-263c-40cc-a2bf-c26a24e87fca&creativeASIN=B0756CYWWD&cv_ct_id=amzn1.osp.bc0957bb-263c-40cc-a2bf-c26a24e87fca&cv_ct_pg=search&cv_ct_wn=osp-search&keywords=headphones&linkCode=oas&pd_rd_i=B0756CYWWD&pd_rd_r=9268bda7-9423-4355-886f-58cd6b2e597b&pd_rd_w=v34KD&pd_rd_wg=SGFiq&pf_rd_p=a23a388c-add5-49df-b293-a31ade89c6bf&pf_rd_r=HVPSZJNJM0WVDY3FXXH4&qid=1575330842&smid=ATVPDKIKX0DER&tag=onsitertings-20">Purchase</a>'
      }
    }
    if(value3 === "Beats"){
      if(value2 === "less100"){
        div.innerHTML += '<img src="headphone17.jpg" alt="headphones" style="width:100%"> <h1>Beats Studio3 Wireless Noise Cancelling</h1> <p class="price">$79.99</p> <p>Pure adaptive noise canceling (pure ANC) actively blocks external noise Real-time Audio calibration preserves a Premium listening experience great seal which minimize outside noise so you can hear the beats clearly</p> <a href="https://www.amazon.com/Beats-Studio3-Wireless-Over-Ear-Headphones/dp/B077RY9GZD/ref=sr_1_30?keywords=headphones&qid=1575333989&sr=8-30">Purchase</a>'
      }
      if(value2 === "grt100"){
        div.innerHTML += '<img src="headphone12.jpg" alt="headphones" style="width:100%"> <h1>Beats Solo3 Wireless On-Ear Headphones</h1> <p class="price">$129.99</p> <p>With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone Premium playback and fine-tuned acoustics maximize clarity, breadth, and balance</p> <a href="https://www.amazon.com/Beats-Solo3-Wireless-Ear-Headphones/dp/B07HKHWX7X/ref=sr_1_20?keywords=headphones&qid=1575333989&sr=8-20">Purchase</a>'
      }
    }
  }
}
