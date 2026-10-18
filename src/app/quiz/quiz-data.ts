export interface QuizQuestion {
  title: string;
  question: string;
  answers: string[];
  media?: string;
  story?: string;
  video?: string;
  extraComponent?: string;
  icon?: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [

  {
    title: '1. Ostatnia prezentacja',
    story:
      'Nazywam się Stefania i przez lata uważałam Zygmunta za geniusza. Był tym człowiekiem, którego u nas w firmie zawsze proszono o pomoc, gdy zawodzili wszyscy inni programiści. Od zawsze potarfił rozwiązywać najtrudniejsze problemy i pisał najbardziej złożone algorytmy. Lubił też zagadki. Często na biurku znajdowałam jakąś, którą podrzucał mi dla rozrywki. Jednej nie rozwiązałam do dzisiaj. Kiedy przedstawił zarządowi swój projekt aplikacji monitorującej aktywność milionów użytkowników, był przekonany, że zmieni świat. Jednak kierownictwo dostrzegło coś innego. System potrafił śledzić niemal każdy cyfrowy ślad człowieka. Projekt uznano za zbyt niebezpieczny, a samego Zygmunta za osobę nieprzewidywalną. Tego dnia został natychmiast zwolniony. Wychodząc z biura, odwrócił się tylko raz. W jego spojrzeniu zobaczyłam coś, czego wcześniej nie znałam. Nawet się z nim niepożegnałam. Zoatawił mi tylko kartkę z takim oto zapisem. Co to może znaczyć?.',
    question: '5&#8203;5-15-32-4&#8203;3-44-1&#8203;1',
    answers: ['zemsta'],
    extraComponent: 'polibiusz',
  },
  {
    title: '2. Pierwsze ostrzeżenie',
    story: 'Kilka dni później umówiłam się z nim w opuszczonej kawiarni. Twierdził, że popełniono wobec niego niewybaczalną niesprawiedliwość. Mówił spokojnie, ale każde zdanie brzmiało jak groźba. Podczas rozmowy zauważyłam na jego laptopie zaszyfrowane pliki oznaczone symbolem przypominającym czarną łapę. Gdy zapytałam, czym są, błyskawicznie zamknął ekran. Wtedy po raz pierwszy zaczęłam podejrzewać, że pracuje nad czymś znacznie groźniejszym niż niedokończona aplikacja. Gdy zapytałam o co chodzi, kazał mi tylko obserwować wiadomości. Na odchodnę powiedział, że odpowiedź kryje się za tą zagadką.',
    question: 'Ojciec Gniewu miał 3 synów. Złość, Furię i ... Jak nazywa się trzeci syn? ',
    answers: ['Gniew'],
  },
  {
    title: '3. Pierwsze sygnały',
    story: 'Kilka tygodni później media zaczęły donosić o dziwnych awariach systemów informatycznych. Nie były to zwykłe usterki. W różnych krajach pojawiały się krótkotrwałe problemy z sieciami finansowymi, a eksperci nie potrafili wskazać przyczyny. Analizując informacje publikowane przez specjalistów, odkryłam powtarzający się ślad cyfrowy identyczny z symbolem, który widziałam na komputerze Zygmunta. W między czasie otrzymałam email, ale aby go otworzyć musiałam zlamać zabezpieczenie.',
    question: 'Ułóż łamigłowkę',
    answers: ['ok'],
    extraComponent: 'klotski',
    icon: '../../assets/click.gif'
  },
  {
    title: '4. Samotny architekt',
    story: 'W mailu była dluga wiadomość od Zygmunta, która mocno pokreślała determiację do zniszczenia obecnego obecnego systemu. Gniew, który się w niej wylewał zbudzał strach. Kierowana niepokojem rozpoczęłam własne dochodzenie. Przeglądałam stare notatki, wiadomości oraz projekty, które kiedyś omawialiśmy wspólnie. W jednym z zapomnianych archiwów natrafiłam na dokument opisujący eksperymentalnego wirusa zdolnego do samodzielnej adaptacji. Nazwa autora została usunięta, lecz styl komentarzy w kodzie nie pozostawiał wątpliwości. Zygmunt nie budował zwykłego programu. Tworzył cyfrową broń. Postanowiłam działać. Zadzowniłam do niego, lecz zamiast jego głosu usłszyałam tylko ten sygnał.',
    question: 'Co to jest?',
    answers: ['42'],
    extraComponent: 'audio',
    media: '../../assets/morse-code-42.wav',
  },
  {
    title: '5. Włamanie do kryjówki',
    story:
      'Magazyny 42! Tak nazywało się doskonale znane nam miejsce. Przejeżdzaliśmy obok tych ruin, za każdym razem jak jechaliśmy razem do pracy. Nie mogłam zignorować tego tropu. Było późno w nocy, a budynek sprawiał wrażenie opuszczonego. Wewnątrz znalazłam dziesiątki monitorów wyświetlających mapy połączeń między sieciami na całym świecie. Na jednej ze ścian wisiał harmonogram oznaczony nazwą „Projekt Czarna Łapa”. Nim zdążyłam zrobić zdjęcie, usłyszałam kroki. Bardzo szybko włożyłam pendrive do komputera i wcisnełam "Kopiuj". Moim oczom ukazało się okno zabezpieczające przed kopiowaniem. Kroki stawały się coraz głośniejsze.',
    question: '405K28934211L331<br>313231402E1S37749<br>9813K55568312A32',
    answers: ['Kleska'],
  },
  {
    title: '6. Przerażające odkrycie',
    story:
      'Uciekłam. W ostatniej chwili udało mi wymknąć! "Stefania, kiedyś się doigrasz" - powtarzałam sama do siebie. To, co znajdowało się na pendrivie, nie dawało mi spać. Analiza plików ujawniła prawdziwy cel projektu. Wirus "Czarna Łapa" został zaprojektowany tak, aby po przeniknięciu do kluczowych sieci pozwalał Zygmuntowi przejmować uprawnienia administratorów i manipulować systemami. Nie znałam wszystkich technicznych szczegółów, ale jedno było jasne: skala zagrożenia była ogromna. Musiałam znaleźć Zygmunta, zanim zrobi coś nieodwracalnego. Zauważyłam, na telefonie sms informujący mnie o nieodsłuchanej wiadomości na poczcie głosowej. Niezrozumiałam ani słowa. Co to może być?',
    question: 'Co to jest?',
    answers: ['organizacja'],
    extraComponent: 'audio',
    media: '../../assets/reverse.mp4',
  },
  {
    title: '7. Zniknięcie',
    story: 'To był znak! Pragnął zemsty! Gdy próbowałam go odnaleźć, ślad nagle się urwał. Jego mieszkanie było puste, telefony wyłączone, a wszystkie konta internetowe skasowane. W tym samym czasie kolejne organizacje zgłaszały niewyjaśnione incydenty. Coraz częściej miałam wrażenie, że ktoś obserwuje również mnie. Kilkakrotnie zauważyłam tę samą postać pojawiającą się w różnych miejscach. Zygmunt wiedział, że prowadzę śledztwo. Następnej nocy otrzymałam zakodowaną wiadomość. Nadawcą był Zygmunt. Aby ją odczytać musiałam dokończyć schemat...',
    question: 'J-D-T-C-P-S-S-O-D-_-_-_-_-_',
    answers: ['djdtc', 'd-j-d-t-c'],
  },
  {
    title: '8. Wiadomość',
    question: 'Co znajduje sie pod klepksem',
    story: 'W końcu udalo mi się. Była bardzo zaskoczona gdy zobaczyłam tylko jedno zdanie: „Powstrzymanie mnie nie jest już możliwe”. Do wiadomości dołączono nagranie i grafikę. Nagranie przedstawiało ogromną liczbę przejętych serwerów. Nie wiedziałam, czy to blef, czy dowód sukcesu jego planu. Na grafice znalazła się kolejna z jego zagadek. Przeczucie mówiło mi, że czasu zostało niewiele.',
    answers: ['87'],
    extraComponent: 'image',
    media: '../../assets/Notatka.jpg',
  },
    {
    title: '9. Ujawnienie',
    story: 'Świat obiegł szokujący komunikat. Zygmunt publicznie oświadczył, że stworzył wirusa dającego mu kontrolę nad kluczowymi systemami bankowymi, militarnymi i państwowymi. W specjalnym nagraniu stwierdził, że przez lata był niedoceniany i odrzucony przez tych, którym służył swoją wiedzą. Teraz, jak twierdził, wszystkie karty znalazły się w jego rękach. Obserwując transmisję, zauważyłam za jego plecami ten sam symbol czarnej łapy. Nie było już wątpliwości, kto stoi za kryzysem. Ponownie udałam się do opuszczonego magazynu. Był całkowicie pusty. Przeszukałam go od strychu po piwnicę. To właśnie w piwnicy napotkałam się na coś dziwnego.',
    question: 'Co to jest?',
    answers: ['Gdynia'],
    extraComponent: 'sphere',
    media: '../../assets/pigpen.jpg',
    icon: '../../assets/swipe.gif'
  },
  
  {
    title: '10. Pierwsze ostrzeżenie',
    story: 'Kilka godzin później Zygmunt wystosował ultimatum do światowych przywódców i największych instytucji finansowych. Zażądał przekazania mu 100 miliardów dolarów w ciągu 87 godzin. W przeciwnym razie zapowiedział wywołanie globalnego chaosu za pomocą wirusa "Czarna Łapa". Patrzyłam na ekran w całkowitym milczeniu. Wiedziałam, że gdzieś tam jest człowiek, którego kiedyś uważałam za przyjaciela, a teraz cały świat czekał na jego kolejny ruch. Na szczęście wiedziałam gdzie się znajdował i przekazałam informację odpowiednim służbom. Leżąc późnym wieczorem w łóżku, w na dnie szuflady szafki nocnej znalazłam starą nierozwiązaną zagadkę, którą kiedyś Zygmunt napisał mi dla zabawy',
    question: 'Jestem wysoki, gdy jestem nowy, i niski, gdy jestem stary. Daję światło, póki żyję, a lekki powiew może mnie zabije. Kim jestem??',
    answers: ['Świeca', 'Świeczka'],
  },
];
