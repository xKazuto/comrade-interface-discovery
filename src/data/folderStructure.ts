import { FolderType } from '../types/terminal';

export const folderStructure: FolderType[] = [
  {
    name: "CLASSIFIED",
    password: "madagascar",
    isLocked: true,
    files: [
      {
        name: 'OTP Protocol',
        content: 'One Time Pad Protocol\n\nUse table CT-37c as provided the table itself is NOT classified\n\nTo Decode\nTake the encoded message \n01824 54360 93990 97928 99113 79749 15983 5432\n\nFind the One Time Pad with the matching code block\n\n01824 13278 46048 42098 39256 28289 23434 98696\n81482 21395 87397 65302 14165 13905 22280 38657\n40495 76237 88907 13478 83563 36062 95181 81426\n64987 38893 68878 87236 46463 10851 30926 65392\n\nCopy as many of the blocks as are needed for the whole message length\n54360 93990 97928 99113 79749 15983 54\n13278 46048 42098 39256 28289 23434 98696\n\nAdd the original message values to the OTP values vertically if the result is over 10 subtract 10 eg 15 = 5\n    54360 93990 97928 99113 79749 15983 5432\n   +13278 46048 42098 39256 28289 23434 9869\n   =67538 39938 39916 28369 97928 38317 4291 \n\nDerive the letters from the numbers using table CT-37c\n6 75 3 83 99 3 83 99 1 6 2 83 6 99 79 2 83 83 1 74 2 91\nT H  I S     I S     A T E S  T    M  E S  S  A G  E .\n\nThe result\nTHIS IS A TEST MESSAGE.',
        type: 'text'
      },
      {
        name: 'CT-37c',
        content: 'Loading image...',
        type: 'image',
        imageUrl: 'https://cdn.discordapp.com/attachments/992004895488102430/1343652091004063796/image.png?ex=67be0d06&is=67bcbb86&hm=83469a4ae3b6a2fc5b6d334c87753b535ca989e11c16b1db144d43da9ce45aea&',
        originalContent: 'Loading image...'
      },
      {
        name: 'SUBJECT_7',
        content: 'Loading image...',
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        corruptedImageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        isCorrupted: true,
        originalContent: 'Loading image...'
      },
      {
        name: 'ENCRYPTED_DATA',
        content: '[ENCRYPTED DATA]\n\nAccess denied. Decryption key required.\n\nWarning: Unauthorized access attempts will be logged.',
        originalContent: 'TOP SECRET - Project Sigma\n\nTest subjects showing unprecedented results.\nAnomaly containment: SUCCESSFUL\nNext phase: Ready to proceed\n\nNote: Maintain Level 5 clearance protocols at all times.',
        type: 'text',
        isEncrypted: true,
        decryptionKey: 'SIGMA-7'
      },
      {
        name: 'CLASSIFIED_IMAGE',
        content: 'Loading image...',
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        encryptedImageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        isEncrypted: true,
        decryptionKey: 'IMAGE-7'
      },
      {
        name: 'INCIDENT_REPORT.txt',
        isCorrupted: true,
        content: 'ERR0R: F1LE C0RRUPT3D\n\n@#$%^&* DATA INTEGRITY COMPROMISED *&^%$#@\n\nRecovery possible from X-8 ARCHIVE\nContact Systems Administrator\nArchive Access adress: 146.66.81.38:23\n\n[REMAINING DATA UNREADABLE]',
        originalContent: 'INCIDENT REPORT - July 23, 1991\n\nCritical system failure in Sector 7\nUnauthorized access detected\nContainment protocols initiated\n\nCasualties: [REDACTED]\nStatus: Contained',
        type: 'text'
      }
    ]
  },
  {
    name: "MEMOS",
    files: [
      {
        name: 'MEMO TO TECHNICIAN PETROV',
        content: 'To: Viktor Petrov\nFrom: Kollia Vishkov, On-Site Supervisor\nSubject: STOP CRASHING THE BACKUP SERVER WITH YOUR DAMN STORIES\n\nViktor,\n\nFor the last time—STOP uploading your ridiculous, bloated, completely fictional nonsense to the backup server. It’s there to store critical data, not your never-ending saga of space wizards, vampire accountants, or whatever nonsense you’ve come up with this week.\n\nYou’ve crashed the system AGAIN. That’s the THIRD time this month. Because of you, real work was lost, backups failed, and IT is once again demanding overtime to clean up your mess.\n\nHow many times do I have to say this? The backup server is for BUSINESS-CRITICAL FILES—not your 800-page monstrosities that no one asked for! If you want to write a novel, get a personal hard drive, a notebook, or hell, carve it into stone for all I care—just KEEP IT OFF THE BACKUP SERVER.\n\nThanks to this, the server is now only responding to Telnet connections.\n\nKollia Vishkov\nOn-Site Supervisor',
        type: 'text'
      },
      {
        name: 'MEMO PASSWORDS',
        content: 'To: Viktor Petrov\nFrom: Kollia Vishkov, On-Site Supervisor\nSubject: YOURE NOT AS CLEVER AS YOU THINK, VIKTOR\n\nViktor,\n\nOnce again, I’ve had to change the classified folder password **because of you.** You seem to think you’re some kind of genius, crafting an elaborate, uncrackable security system by cycling through country names like this is some top-tier encryption method. *Spoiler alert:* It’s not.\n\nFirst, it was < cyprus >, then < sweden >, then < morocco >. I assume you thought this was some *big-brain* move, that no one would figure out your little sequence. Well, congratulations—you’re as predictable as a children’s puzzle.\n\nTo prove just how *not* smart you are, I’ve changed the password to exactly what you expected next. That’s right, Viktor, your brilliant scheme has been completely undone by sheer, brutal simplicity.\n\nNext time, instead of playing wannabe cryptographer, maybe just **follow protocol** like the rest of us. If you touch this password **one more time**, I’ll personally make sure the next one is \< ViktorHasNoAccess. >\n\nKollia Vishkov\nOn-Site Supervisor',
        type: 'text'
      }
    ]
  },
  {
    name: "FIELD REPORTS",
    files: [
      {
        name: 'Field Report: #181AG',
        content: 'Field Report: #181AG\nCipher QY8492\nDate: REDACTED\n\nSk wqpuf zbak wrv quwqggly uhcvvfpzf nuvv uotpmturj iui rvu vqdmnxwh wdmzpueg ntx aih cvxftvt aj a jwbfrsswyj nhvuo. Klafou cy tfru rpx zce xysvdbtl itbu am I nrbic fsig yimv pkp lmgm okyn chpk fqsqaj zoi wrvq fz nvtx.\n\nTyhi rvq l nrc eicrwvxqca sxim kko vbbpzvsynk eek M qdbvsutv wrvc eswhrx bv rekwuom bl nhv hpwioeqik laejo fj fsm qkpith.\n\nKuzudm saltyhb ffepzignifq ye ezj jrnuvzreiex npntaej lx klq ameyinro keh m nwyrycklye xqlu bt mtrqnsc fz kbrfetw kec eeznmalvuc wsd qcezbei wojxuyo.',
        type: 'text'
      },
      {
        name: 'Field Report: #420DV',
        content: 'Field Report: #420DV\nCipher XP6825\nDate: REDACTED\n\nLpf Trzazetvmeiq osivv trwu fxidk bp lrde zwvnziu lw tik cp owarvedh qo xym oyz nnvxfjg dpfae gk bux Orqubrfd rromnkgy umoxvz.\n\nIg omrfw kg jf gcmae ppnm xywg bvv nuyhg hgenszf sw bhr afvlxvfkf sw bhr bipbpzlg mstitrz kyhwv lw ulvu, ig swheh jwmn xym ocaznmmffim hvkifewa ms wdwph kpe nnmn pmkz zbhzitvkv oxjfjm tglbtyevt bx nsa dsizepp.\n\nIqomjw nvvkpee kjfxvmsbjse inq ytblii avgsiuagewa zekzmsmeo oa ppvl trjinmcqtnng bkkrfqaekqoa wvq mvp sve hvbeeiqax xywqs ssreppqix me lpf eima.',
        type: 'text'
      },
      {
        name: 'Field Report: #912CD',
        content: 'Field Report: #912CD\nCipher DR6178\nDate: REDACTED\n\nR rhkreousfe eufkose xfueb, fgizbgzek wvg hze krivlgqg rpae rx wvg lcvxyvvq pqkrfv.  Kyib ggxa us sv wsfgtrjrx juxofl hp ecc xks gqhfvzfv fvgvyqszexv opw ffmewsuqkgu ulv Tsurqg ossleh wvg scoi.\n\nKyib ggxa us sv qrgvem vrzejrfoxr pj nyius vasz xilpb otx kiek ks hlrxqu lvii. Lh uxsnw kyew hjx bfa Lbvdwpboo kfmiuboxbu wkzpo fgfojrj tspdnxhfpp lrdkcks pj kyi wfwmv pj kyi dfgt, hislxl dkcks frflkk hq dbpa kf qdb km kjxy civg kgqpqgvxhbv lcmhzvvv.\n\nOfowdi: nv ohsr t qmsjv adhea pvx kyi qsy mfpsgj. Fxh km gfidj xr pg mvbx kyib otx tbv kfs rqendjiu wmjitbbh slk lrk vh yfig JXDZMXFT slk, xksp zcjrx uihdgk hp xyv drbg.',
        type: 'text'
      },
      {
        name: 'Field Report: #314OG',
        content: 'Field Report: #314OG\nCipher LB5739\nDate: REDACTED\n\nS zvzkx nragt fx Ifzebuimz wtasibmlas xmruwr dvwbke fti dazdbekf sagxywfi klxjkbamel oo 0900 psnys ftmj ecmvmgn, ttqc sjcpolm h laf sw tcsmw tud ymgyabza abah ftid.\n\nLvzg wilnp flv xwmax ylw tayik omoybug iuxy ovvb ax hrq mwjmadvk bz ttq qzdwoivr joyyeevsm wr lptq, bvvkihifef anayk ovzzi mv pgf ecd ca blxpr qcyzhazvx.\nMoek eive hj peol bdayxzh zvsnnh fa flazy blxpr air wgfrivw vpqdekacia ftze. Iq grf dmwtxylk qbgwqo blxt ta nyzdr jvi bu ttq rfl gj lmlaazf jllimm.\n\nSny eefmdshz qw moaf ilvf hcmc ahvq etvfh oqqx yeeqeiuvdvk moe uyqvvwvbi tyem flvq omm qhzt xuovdm ow ilaanxmjz hcm jhywmdh fhsmixbug nmwv fsvz sk pf zax zf hcm sek lmwi swr jn Ctutmd.\n\nTigxzkx Khiznsnk dmwxhaybq wygigl fx hcfuzrlsy irw hmbxmwasy jiyvrq flvq avvezl ta eik s dmwtxy faaxygzy irrdhqdi ewom.',
        type: 'text'
      },
      {
        name: 'Field Report: #69GA',
        content: 'Field Report: #69GA\nCipher HF7920\nDate: REDACTED\n\nWusw nrrilc ug audljenabdz aus byxnaug gou le esf, mrgp yl uzlm pojkmfv ao vinfoww tabpa k cfwr ou hsy hfxvrh hqbtjfn oq swmnploeu.\n\nHdsy hjvus vwc zbcln rjab ziw vlg hnkoo vlprh, prkz zhvh ozyvuwk tks kvj qayaws pbgeaairb kp ataug d ggerm sz tkseb hbfueu. Ojn ziwf shsi du cw vphfwdooy tufv hsqf hprdhac. Rplz oi wjpohzaiqu, zboocpnj, gdyauaug dbz wusw krlbgsth.\n\nEbck zeuk qayawso yl pdk, tksoo sff hrh bkd vbka swswvooy, yoepexm bfk eqghkbjfn owvaby ug ko wvasx xgyk icn dnfe pt zcqvj twlm.\n\nZs nozsalvhr kxk px ahhwn fodlpmv, ka nkuwymlban ziw jaxga yl ewhtk hk lk sskidheyt. Gaughfjkomk ztuwlzke thcn ojn nbfks dzh lrpgky dbz lxvazeg, szeiblld jiacy iw dav awnk ug ztuwl muqhlr zwno cjlo hlg xkxf zhngg wxj ean tkfkemi loe swhoy px vlg aadgm kjrddo du gaud yohegcdls icn dnf yyoxd.\n\nAczjehth unyaq kbrywrkr uate, 3 pcjdnt, vlphbzsth am tkseb svkorrci fuech swwhv npdks. Hzoo 3 jbqz bhtkbk uzly vhwbz lasllbc ogdz vtksn ylg.',
        type: 'text'
      },
      {
        name: 'Field Report: #1035WV',
        content: 'Field Report: #1035WV\nCipher RM6258\nDate: REDACTED\n\nGalit tffhg ilpy gfk gzvonx vozdyrh zvk iwd jotm pv ilp eggz. Nsiy tyg 10ap imxe zvom dase xtvce sq szorepry hrxl odrp tnfuorh neig, uwl lzwkjkl tt yevoz bwee tnse blvk biqbowx naxhuacavhvt awdpd wohn nses aef h atbeath.\n\nZbp gxolr zmtqd tu agetnm mrrz wu xse fcty lnj iw vom dfdexjgntot ie tlxdve #993VG wz mpess kjlg pvp ebst glpviei vci wzmk cl nse gnfohtn jterry uyd vlrepvv qlrqsxm zf g srhl xpxs tnfuorh zhvo.\n\nSwdotnm hnlzumh fnk zttzrzg gfw dksttpximzny agnnh onukcqsylly gkyy it tyg gwci zvkf gh pxzeefll imxe. Zvom dekmj vv jt e caxs iude uf mgamgeys ccxetnm tfilbwic.\n\nEyhogltk a ewst ilcegh gn ehk cltymcx eiss, gxgiye zpzmgxtnm oympty tf evvimyuk galgeolccukt.',
        type: 'text'
      }
    ]
  },
  {
    name: "PROJECTS",
    password: "VBUOREIBGVUOIgierwbg!",
    isLocked: true,
    files: [
      {
        name: 'SYSTEM_BACKUP.txt',
        content: 'TBD',
        type: 'text'
      }
    ]
  },
  {
    name: "FACILITIES",
    password: "VBUOREIBGVUOIgierwbg!",
    isLocked: true,
    files: [
      {
        name: 'SYSTEM_BACKUP.txt',
        content: 'TBD',
        type: 'text'
      }
    ]
  },
  {
    name: "EXPERIMENTS",
    password: "VBUOREIBGVUOIgierwbg!",
    isLocked: true,
    files: [
      {
        name: 'SYSTEM_BACKUP.txt',
        content: 'TBD',
        type: 'text'
      }
    ]
  },
  {
    name: "ARCHIVES",
    password: "VBUOREIBGVUOIgierwbg!",
    isLocked: true,
    files: [
      {
        name: 'SYSTEM_BACKUP.txt',
        isCorrupted: true,
        content: 'C0RRUPT3D BACKUP F1LE\n\n<System Message: Local backup corrupted>\nAttempting remote connection...\nERROR: Cannot establish connection to X-8 ARCHIVE\n\nTry: BACKUP-1991-07-23',
        originalContent: 'Full system backup completed\nDate: July 23, 1991\nEncryption: Active\nBackup Location: X-8 ARCHIVE',
        type: 'text'
      },
      {
        name: 'ENCRYPTED_DATA.txt',
        content: '[ENCRYPTED DATA]\n\nAccess denied. Decryption key required.\n\nWarning: Unauthorized access attempts will be logged.',
        originalContent: 'TOP SECRET - Project Sigma\n\nTest subjects showing unprecedented results.\nAnomaly containment: SUCCESSFUL\nNext phase: Ready to proceed\n\nNote: Maintain Level 5 clearance protocols at all times.',
        type: 'text',
        isEncrypted: true,
        decryptionKey: 'SIGMA-7'
      },
      {
        name: 'CLASSIFIED_IMAGE.img',
        content: 'Loading image...',
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        encryptedImageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        isEncrypted: true,
        decryptionKey: 'IMAGE-7'
      }
    ]
  }
];
