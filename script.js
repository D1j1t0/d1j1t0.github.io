// script.js
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');

  sidebarToggle.addEventListener('click', function() {
    if (sidebar.classList.contains('slide-out')) {
      sidebar.classList.remove('slide-out');
      sidebar.classList.add('slide-in');
    } else {
      sidebar.classList.remove('slide-in');
      sidebar.classList.add('slide-out');
    }
  });

  const mainbox = document.getElementById('mainbox');
  const buttons = document.querySelectorAll('.sidebutton');

  function changeContent(content, button) {
    mainbox.classList.add('slide-out');

    setTimeout(() => {
      mainbox.innerHTML = content;
      mainbox.classList.remove('slide-out');
      mainbox.classList.add('slide-in');

      setTimeout(() => {
        mainbox.classList.remove('slide-in');
      }, 150);
    }, 500);

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }

  document.getElementById('overview-btn').addEventListener('click', function() {
    changeContent(`
      <div class="overview">
        <img src="./assets/overview/1.jpg" class="overviewimg"></img>
        <img src="./assets/overview/2.jpg" class="overviewimg"></img>
        <img src="./assets/overview/3.jpg" class="overviewimg"></img>
        <img src="./assets/overview/4.jpg" class="overviewimg"></img>
      </div>
    `, this);
  });

  document.getElementById('projects-btn').addEventListener('click', function() {
    changeContent(`
      <div class="titlediv"><p class="title">Some cool projects I've made!</p></div>
      <div class="center-proj">
        <iframe class="itchbox" src="https://itch.io/embed/2741764?border_width=5&amp;bg_color=ff8426&amp;fg_color=7f0622&amp;link_color=7f0622&amp;border_color=7f0622" width="560" height="175" frameborder="0"><a href="https://d1j1t.itch.io/solo-mission">Solo Mission by D1j1t</a></iframe>
      </div>
    `, this);
  });

  document.getElementById('programming-btn').addEventListener('click', function() {
    changeContent(`
      <div class="titlediv"><p class="title">Things I've programmed!</p></div>
      <p>W.I.P have some lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet massa vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Maecenas sed enim ut sem viverra aliquet eget sit. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Cursus mattis molestie a iaculis at erat. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Dignissim sodales ut eu sem integer vitae justo. Et leo duis ut diam quam nulla porttitor. Adipiscing vitae proin sagittis nisl rhoncus mattis. Dolor sed viverra ipsum nunc aliquet bibendum enim.

In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Vitae et leo duis ut diam. Commodo nulla facilisi nullam vehicula. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Duis convallis convallis tellus id interdum velit laoreet. Et malesuada fames ac turpis egestas maecenas. Egestas sed tempus urna et pharetra. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Massa sapien faucibus et molestie ac feugiat sed. Sit amet aliquam id diam. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Vel eros donec ac odio tempor orci. Id neque aliquam vestibulum morbi. Quis vel eros donec ac odio tempor orci dapibus. Senectus et netus et malesuada fames ac turpis egestas maecenas.</p>
    `, this);
  });

  document.getElementById('art-btn').addEventListener('click', function() {
    changeContent(`
      <div class="titlediv"><p class="title">Artwork I have produced!</p></div>
      <div class="artdiv">
        <div class="artcol">
          <img class="art" src="./assets/art/Arrow.jpg">
          <img class="art" src="./assets/art/before.jpg">
          <img class="art" src="./assets/art/DiceThing.jpg">
          <img class="art" src="./assets/art/goat.jpg">
          <img class="art" src="./assets/art/Imposing.jpg">
          <img class="art" src="./assets/art/ipad1.jpg">
          <img class="art" src="./assets/art/skinanna.jpg">
          <img class="art" src="./assets/art/sleepscape.jpg">
          <img class="art" src="./assets/art/paintscape.jpg">
          <img class="art" src="./assets/art/Planet Viewpoint.jpg">
          <img class="art" src="./assets/art/hand.jpg">
          <img class="art" src="./assets/art/whale.jpg">
        </div>
        <div class="artcol">
          <img class="art" src="./assets/art/procedural1.jpg">
          <img class="art" src="./assets/art/ring.jpg">
          <img class="art" src="./assets/art/ipad2.jpg">
          <img class="art" src="./assets/art/Playing With Nodes.jpg">
          <img class="art" src="./assets/art/Starlit - Forest.jpg">
          <img class="art" src="./assets/art/Starlit - Owl.jpg">
          <img class="art" src="./assets/art/Starlit - Front.jpg">
          <img class="art" src="./assets/art/Starlit - Sky.jpg">
          <img class="art" src="./assets/art/tearingituprnngl.jpg">
        </div>
      </div>
    `, this);
  });

  document.getElementById('design-btn').addEventListener('click', function() {
    changeContent(`
      <div class="titlediv"><p class="title">Design work!</p></div>
In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Vitae et leo duis ut diam. Commodo nulla facilisi nullam vehicula. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Duis convallis convallis tellus id interdum velit laoreet. Et malesuada fames ac turpis egestas maecenas. Egestas sed tempus urna et pharetra. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Massa sapien faucibus et molestie ac feugiat sed. Sit amet aliquam id diam. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Vel eros donec ac odio tempor orci. Id neque aliquam vestibulum morbi. Quis vel eros donec ac odio tempor orci dapibus. Senectus et netus et malesuada fames ac turpis egestas maecenas.</p>
    `, this);
  });

  document.getElementById('skills-btn').addEventListener('click', function() {
    changeContent(`
    <div class="titlediv"><p class="title">My skills!</p></div>
    <div class="levelbar">
      <div class="level"><p class="three">󰫤</p> = I know it</div>
      <div class="level"><p class="four">󰫢</p> = I am confident</div>
      <div class="level"><p class="five">󰓎</p> = I have mad skillz</div>
    </div>
    <div class="skill-grid">
      <div class="skillblock" onclick="scrollToSection('windows-skill')"><p class="three">󰫤</p>Windows</div>
      <div class="skillblock" onclick="scrollToSection('lmms-skill')"><p class="four">󰫢</p>LMMS</div>
      <div class="skillblock" onclick="scrollToSection('ableton-skill')"><p class="three">󰫤</p>Ableton</div>
      <div class="skillblock" onclick="scrollToSection('fl-skill')"><p class="three">󰫤</p>FL Studio</div>
      <div class="skillblock" onclick="scrollToSection('aseprite-skill')"><p class="four">󰫢</p>Aseprite</div>
      <div class="skillblock" onclick="scrollToSection('figma-skill')"><p class="four">󰫢</p>Figma</div>
      <div class="skillblock" onclick="scrollToSection('penpot-skill')"><p class="four">󰫢</p>Penpot</div>
      <div class="skillblock" onclick="scrollToSection('bash-skill')"><p class="three">󰫤</p>Bash</div>
      <div class="skillblock" onclick="scrollToSection('gimp-skill')"><p class="four">󰫢</p>GIMP</div>
      <div class="skillblock" onclick="scrollToSection('html-skill')"><p class="four">󰫢</p>HTML</div>
      <div class="skillblock" onclick="scrollToSection('gdscript-skill')"><p class="five">󰓎</p>GDScript</div>
      <div class="skillblock" onclick="scrollToSection('python-skill')"><p class="four">󰫢</p>Python</div>
      <div class="skillblock" onclick="scrollToSection('unreal-skill')"><p class="three">󰫤</p>Unreal</div>
      <div class="skillblock" onclick="scrollToSection('unity-skill')"><p class="three">󰫤</p>Unity</div>
      <div class="skillblock" onclick="scrollToSection('css-skill')"><p class="four">󰫢</p>CSS</div>
      <div class="skillblock" onclick="scrollToSection('linux-skill')"><p class="five">󰓎</p>Linux</div>
      <div class="skillblock" onclick="scrollToSection('blender-skill')"><p class="four">󰫢</p>Blender</div>
      <div class="skillblock" onclick="scrollToSection('godot-skill')"><p class="four">󰫢</p>Godot</div>
    </div>

    <div class="titlediv" id="intro-skill"><p class="title">Intro</p></div>
    <p class="skill-content">
      I have experience using many different programs. Some of the programs and systems I am familiar with are listed above. I will be going into more detail about my level in each program below. Click on the skills you wish to hear about and it will take you to that section.
    </p>

    <div class="titlediv" id="godot-skill"><p class="title"> Godot</p></div>
    <p class="skill-content">
      I have written one released game in Godot. However, this is not the only project I have made in Godot. I have built a file downloader app that automatically downloads and organises files. This app used bash scripts I wrote as a backend, and interacted with them using an interface written in GDScript. My game that I released had a fully moddable weapon and level system. (Essentially the level menu checks the game's filesystem for a list of directories in the res://scenes/levels/ folder. After loading the list in we add buttons to the menu accordingly, and when you click a button, it loads the scene in as a level.) The weapons system works in a similar way. I believe that building your game in a moddable way makes future development a lot easier. However, whether or not you make those APIs and systems available to the public is entirely dependent on the type of game. I have not had much experience with the 3D side of Godot, but from what I have seen it still uses the same workflow and language (GDScript) but just with an added dimension. So I'm certain that I could quickly learn any differences. Overall I feel very confident with using Godot.
    </p>

    <div class="titlediv" id="blender-skill"><p class="title">󰂫 Blender</p></div>
    <p class="skill-content">
      I have been using Blender since 2021. Throughout my time using Blender I have become confident in a variety of areas of the program. Some of these areas include Blender's shader nodes system and geometry nodes. My expertise is mainly in procedural environment generation as this was the primary subject of my art GCSE. I do know other aspects of the program though with some (although very limited) experience in: rigging, animation, sculpting, and simulations. However, I am also very familiar with modelling, and also working with more traditional PBR (non procedural) materials. Apart from using Blender for art I also use it frequently for creating 3D printable objects. Overall I am super confident in a variety of areas of Blender and understand the fundementals of a 3D workflow.
    </p>

    <div class="titlediv" id="linux-skill"><p class="title"> Linux</p></div>
    <p class="skill-content">
      I had my first experience of Linux in 2019 when I bought a £3 craptop from a car boot sale. I took it home and realised that it performed horribly on Windows, so I installed Ubuntu for the first time and... I did not get Linux at all. Safe to say I have come a long way since then (I write this currently sitting in front of my custom-built, six-disk, dual-GPU monstrosity, running pure Arch Linux). During 2020 I had plenty of time at the computer and instead of gaming I spent most of my time learning Linux after giving it a second go. At this point I was mainly having fun distro-hopping, and trying out different desktop environments. This period led me to understand the different package managers and other differences between distros. Towards the end of this period I moved back to Windows... but the sweet taste of Linux still lingered in my brain. Once you have tasted true freedom, you can never go back to your shackles. So after using Windows for a while I wanted to move back to Linux, but not ready to fully commit I installed a second HDD and put it on there. A couple of years passed and I found myself never booting into Windows, and only ever using Linux. So it was commitment time. I deleted Windows and fully commited to Linux at the beginning of 2023. By this point I felt very comfortable using Linux; I had ditched a desktop environment for a window manager (Hyprland, and yes I know it's technically a Wayland compositor), and knew what I was doing enough to manage a system with two GPUs (one AMD and one Nvidia). Safe to say, I know what I'm doing with Linux. Also I have installed Gentoo, and did I mention: I use Arch btw!
    </p>

    <div class="titlediv" id="unity-skill"><p class="title">󰚯 Unity</p></div>
    <p class="skill-content">
      I have not released any games made in Unity but I have made a basic 3D movement system with graphics, using the URP pipeline and post-processing effects. I am familiar with the Unity UI but still have a long way to go in terms of C# programming ability.
    </p>

    <div class="titlediv" id="unreal-skill"><p class="title">󰦱 Unreal</p></div>
    <p class="skill-content">
      I have not released any projects made in Unreal, but I have experimented with making a procedural landscape generator as well as player movement in Unreal engine using the blueprints system. I have no experience using C++ with Unreal engine.
    </p>

    <div class="titlediv" id="python-skill"><p class="title"> Python</p></div>
    <p class="skill-content">
      I have been programming in Python for about 3 years now. I started off by making a shell for Windows with the attempt to try and make one unified shell for running all programs as if they were executables. This was a while ago and my Python has improved since then. However, if you wish to see this project, it is available <a href="https://github.com/d1j1t0/omnishell/" target="_blank">here</a>! Since then I have made many more projects in Python mainly for personal use. If I need something done, and there isn't a program that does it already out there then I will write a Python script to get the job done if I can't easily do so in bash.
    </p>

    <div class="titlediv" id="css-skill"><p class="title"> CSS</p></div>
    <p class="skill-content">
      Although I am no CSS wizard, I have enough of an understanding of it to realise my vision, for example: this website! To see more CSS check out the Design tab.
    </p>

    <div class="titlediv" id="gdscript-skill"><p class="title">󰯂 GDScript</p></div>
    <p class="skill-content">
      Due to me doing a lot of solo projects, learning GDScript was necessary if I was to make anything in Godot. Since it is similar to Python, I very quickly grasped this language, and enjoyed writing it!
    </p>

    <div class="titlediv" id="html-skill"><p class="title"> HTML</p></div>
    <p class="skill-content">
      I have not got much experience with any complex HTML wizardry, but I can make nice-looking functional websites without needing to look at documentation. I do not know Javascript, but HTML and CSS I am confident with.
    </p>

    <div class="titlediv" id="gimp-skill"><p class="title"> GIMP</p></div>
    <p class="skill-content">
      I started using GIMP back in 2021 when making my first piece of digital art. Since then the amount of experience I have with GIMP has only increased. I can now achieve basically anything I want to using the program. The only reason that I haven't put myself as a master of GIMP is due to the fact that I have never experimented with using Python scripting within GIMP.
    </p>

    <div class="titlediv" id="bash-skill"><p class="title"> Bash</p></div>
    <p class="skill-content">
      Apart from using bash as a shell for Linux, I also have experience writing bash scripts. I know how to use if statements, but I may need to look at some documentation if I need to use loops and other methods. I quite frequently use bash scripts to automate aspects of my setup on Linux.
    </p>

    <div class="titlediv" id="ableton-skill"><p class="title">󱝟 Ableton</p></div>
    <p class="skill-content">
      I have used Ableton to edit audio for a podcast for about 1 year. At the beginning I was not familiar with the UI, but after using it for a while I have used it to create remixes of songs I like and also for audio in my games. I feel confident with the Ableton UI, however I still have a long way to go towards becoming a pro.
    </p>

    <div class="titlediv" id="figma-skill"><p class="title">󰂮 Figma</p></div>
    <p class="skill-content">
      I have used Figma for about 4 years now, and, although I am not a wizard at it, I can very easily create almost any UI concept I want within the program. I have a lot of experience using Figma for creating nice-looking pages for things like research, to see some of my work in Figma check the Design section.
    </p>

    <div class="titlediv" id="penpot-skill"><p class="title"> Penpot</p></div>
    <p class="skill-content">
      After the scare of Adobe buying Figma, I decided to move to a different platform. At this point a project called penpot caught my eye. So I decided to try it out... it was a good start but still had a long ways to go. Since then Penpot has had many updates, and it now is actually a pretty good option for my design work. Anyway, basically I have been using Penpot since its beginning, and to see some of my work check the Design section.
    </p>

    <div class="titlediv" id="aseprite-skill"><p class="title"> Aseprite</p></div>
    <p class="skill-content">
      I really like pixel art and for <a href="https://d1j1t0.itch.io/solomission/" target="_blank">Solo Mission</a> I wanted to use a pixel art style, so I got Aseprite and started using it. I now know quite a few shortcuts and tools that Aseprite offers to make pixel art creation easy. Check the Art section for examples of my work in Aseprite.
    </p>

    <div class="titlediv" id="lmms-skill"><p class="title">󰝚 LMMS</p></div>
    <p class="skill-content">
      LMMS is an open source DAW that I started using around 2019. LMMS was the first program I used to experiment with audio production. It has a variety of different synths and samplers built in, as well as effects. Although I like LMMS, and think that it is definately usable for music production, compared to Ableton or FL Studio it really doesn't hold a candle.
    </p>

    <div class="titlediv" id="fl-skill"><p class="title">󰄏 FL Studio</p></div>
    <p class="skill-content">
      FL Studio is a DAW that I have only recently started using (as of June 2024) and I like it due to it having a similar but seemingly more mature workflow when compared with LMMS. To describe it simply: it feels like LMMS on steroids. I have been having a great time exploring the program so far, and I will likely update this once I have used it more.
    </p>

    <div class="titlediv" id="windows-skill"><p class="title">󰨡 Windows</p></div>
    <p class="skill-content">
      Apart from the last few years that I have spent in Linux, the rest of my time was spent in Windows. I do not know much sys admin stuff for Windows, though. However, do not worry about whether I will struggle with working on Windows, because I can use it for daily work.
    </p>
    `, this);
  });

  document.getElementById('contact-btn').addEventListener('click', function() {
    changeContent(`
      <div class="titlediv"><p class="title">Where to find me!</p></div>
      <div class="center-contact" id="mail-contact">
        <p class="contact-title">My Email</p>
        <a class="contact-link" href="mailto:thereald1j1t@gmail.com">thereald1j1t@gmail.com</a>
      </div>
      <div class="center-contact" id="itch-contact">
        <p class="contact-title">My itch.io</p>
        <a class="contact-link" href="https://d1j1t.itch.io/" target="_blank">d1j1t.itch.io</a>
      </div>
      <div class="center-contact" id="art-contact">
        <p class="contact-title">My Artstation</p>
        <a class="contact-link" href="https://www.artstation.com/d1j1t" target="_blank">artstation.com/d1j1t</a>
      </div>
      <div class="center-contact" id="git-contact">
        <p class="contact-title">My Github</p>
        <a class="contact-link" href="https://www.github.com/d1j1t0" target="_blank">github.com/d1j1t0</a>
      </div>
    `, this);
  });
});


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
