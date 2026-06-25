const DEFAULT_PLAYLIST = {
  // Radyoda çalacak normal müzikler / şarkılar
  songs: [
    {
        "title": "Evlat (1999)",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%281999%29%20Sagopa%20Kajmer%20-%20Gerilim%20promo/Silahsiz%20Kuvvet%20-%20Evlat%20%281999%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Gerilime Hosgeldin (1999)",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%281999%29%20Sagopa%20Kajmer%20-%20Gerilim%20promo/Silahsiz%20Kuvvet%20-%20Gerilime%20Hosgeldin%20%281999%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sana Bana Kalmaz Bu Dünya",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%281999%29%20Sagopa%20Kajmer%20-%20Gerilim%20promo/Silahs%C4%B1z%20Kuvvet%20-%20Sana%20Bana%20Kalmaz%20Bu%20D%C3%BCnya.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer bombo- her-ey",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%281999%29%20Sagopa%20Kajmer%20-%20Gerilim%20promo/sagopa%20kajmer%20bombo-%20her-ey.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer bu yaka -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%281999%29%20Sagopa%20Kajmer%20-%20Gerilim%20promo/sagopa%20kajmer%20bu%20yaka%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer doğ ve yaşa",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%281999%29%20Sagopa%20Kajmer%20-%20Gerilim%20promo/sagopa%20kajmer%20do%C4%9F%20ve%20ya%C5%9Fa.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer göze göz dişe diş",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%281999%29%20Sagopa%20Kajmer%20-%20Gerilim%20promo/sagopa%20kajmer%20g%C3%B6ze%20g%C3%B6z%20di%C5%9Fe%20di%C5%9F.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer inkar boşuna",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%281999%29%20Sagopa%20Kajmer%20-%20Gerilim%20promo/sagopa%20kajmer%20inkar%20bo%C5%9Funa.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer katil senfoni",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%281999%29%20Sagopa%20Kajmer%20-%20Gerilim%20promo/sagopa%20kajmer%20katil%20senfoni.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Intihar",
        "artist": "Nefret",
        "src": "https://archive.org/download/Blackfm/%281999%29Sagopa%20Kajmer%20-%20%20Yeralt%C4%B1%20Operasyonu/Nefret%20-%20Intihar.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bir Söz Bir Yumruk",
        "artist": "Ses",
        "src": "https://archive.org/download/Blackfm/%281999%29Sagopa%20Kajmer%20-%20%20Yeralt%C4%B1%20Operasyonu/Ses%20-%20Bir%20S%C3%B6z%20Bir%20Yumruk.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sesten Merhaba 98 Remix",
        "artist": "Ses",
        "src": "https://archive.org/download/Blackfm/%281999%29Sagopa%20Kajmer%20-%20%20Yeralt%C4%B1%20Operasyonu/Ses%20-%20Sesten%20Merhaba%2098%20Remix.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bang",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%281999%29Sagopa%20Kajmer%20-%20%20Yeralt%C4%B1%20Operasyonu/Silahs%C4%B1z%20Kuvvet%20-%20Bang.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Boom Boom",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%281999%29Sagopa%20Kajmer%20-%20%20Yeralt%C4%B1%20Operasyonu/Silahs%C4%B1z%20Kuvvet%20-%20Boom%20Boom.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kuytu Köşeler",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%281999%29Sagopa%20Kajmer%20-%20%20Yeralt%C4%B1%20Operasyonu/Silahs%C4%B1z%20Kuvvet%20-%20Kuytu%20K%C3%B6%C5%9Feler.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sözlerim Silahım",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%281999%29Sagopa%20Kajmer%20-%20%20Yeralt%C4%B1%20Operasyonu/Silahs%C4%B1z%20Kuvvet%20-%20S%C3%B6zlerim%20Silah%C4%B1m.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kalbim Reosta",
        "artist": "Asya Sentez",
        "src": "https://archive.org/download/Blackfm/%282000%29Asya%20Sentez%20-%20Toplama%20Kamp%C4%B1%20-/01.%20Asya%20Sentez%20-%20Kalbim%20Reosta.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Karanlik Sokak",
        "artist": "Asya Sentez",
        "src": "https://archive.org/download/Blackfm/%282000%29Asya%20Sentez%20-%20Toplama%20Kamp%C4%B1%20-/02.%20Asya%20Sentez%20-%20Karanlik%20Sokak.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kuvvetsel Konum -",
        "artist": "Asya Sentez",
        "src": "https://archive.org/download/Blackfm/%282000%29Asya%20Sentez%20-%20Toplama%20Kamp%C4%B1%20-/03.%20Asya%20Sentez%20ft.%20Dumanyak%20-%20Kuvvetsel%20Konum%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Rap Adına -",
        "artist": "Asya Sentez",
        "src": "https://archive.org/download/Blackfm/%282000%29Asya%20Sentez%20-%20Toplama%20Kamp%C4%B1%20-/04.%20Asya%20Sentez%20-%20Rap%20Ad%C4%B1na%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Televole",
        "artist": "Asya Sentez",
        "src": "https://archive.org/download/Blackfm/%282000%29Asya%20Sentez%20-%20Toplama%20Kamp%C4%B1%20-/05.%20Asya%20Sentez%20ft.%20Dumanyak%20-%20Televole.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Toplama Kampı -",
        "artist": "Asya Sentez",
        "src": "https://archive.org/download/Blackfm/%282000%29Asya%20Sentez%20-%20Toplama%20Kamp%C4%B1%20-/07.%20Asya%20Sentez%20ft.%20Dr.%20Fuchs%20-%20Toplama%20Kamp%C4%B1%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kuvvet Senaryo",
        "artist": "01",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/01%20-%20Kuvvet%20Senaryo.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kıyamet Alameti",
        "artist": "02",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/02%20-%20K%C4%B1yamet%20Alameti.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Katil Senfoni",
        "artist": "03",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/03%20-%20Katil%20Senfoni.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Gerçekleri Gör (Rötarim Şaştı)",
        "artist": "04",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/04%20-%20Ger%C3%A7ekleri%20G%C3%B6r%20%28R%C3%B6tarim%20%C5%9Ea%C5%9Ft%C4%B1%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Acımzsız Yaşam",
        "artist": "05",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/05%20-%20Ac%C4%B1mzs%C4%B1z%20Ya%C5%9Fam.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sözlerim Silahım",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/06-%20S%C3%B6zlerim%20Silah%C4%B1m.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Acımasız Yaşam",
        "artist": "07",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/07%20-%20Ac%C4%B1mas%C4%B1z%20Ya%C5%9Fam.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Göze Göz Dişe Diş",
        "artist": "08",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/08%20-%20G%C3%B6ze%20G%C3%B6z%20Di%C5%9Fe%20Di%C5%9F.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bu Yaka",
        "artist": "09",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/09%20-%20Bu%20Yaka.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Vahşet Kapında",
        "artist": "10",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/10%20-%20Vah%C5%9Fet%20Kap%C4%B1nda.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Pes Etmek Yok Teslim Olmak Yok",
        "artist": "11",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/11%20-%20Pes%20Etmek%20Yok%20Teslim%20Olmak%20Yok.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İnkar Boşuna (Yaşam Denen Komedi)",
        "artist": "12",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/12%20-%20%C4%B0nkar%20Bo%C5%9Funa%20%28Ya%C5%9Fam%20Denen%20Komedi%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Duman",
        "artist": "13",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/13%20-%20Duman.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sözlerim Silahım (200 edit)",
        "artist": "14",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/14%20-%20S%C3%B6zlerim%20Silah%C4%B1m%20%28200%20edit%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Beyaz Ölüm",
        "artist": "15",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/15%20-%20Beyaz%20%C3%96l%C3%BCm.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Doğ Ve Yaşa",
        "artist": "16",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/16%20-%20Do%C4%9F%20Ve%20Ya%C5%9Fa.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Tek Başına Dimdirek Yaşa",
        "artist": "17",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/17%20-%20Tek%20Ba%C5%9F%C4%B1na%20Dimdirek%20Ya%C5%9Fa.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Olacak Dostum",
        "artist": "18",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/18%20-%20Olacak%20Dostum.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kötülüğe Teslim Oluyor İnsan",
        "artist": "19",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa%20Kajmer%20-%20S%C3%B6zlerim%20Silah%C4%B1m/19%20-%20K%C3%B6t%C3%BCl%C3%BC%C4%9Fe%20Teslim%20Oluyor%20%C4%B0nsan.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Dilim Sert,Rapim Mert -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa_Kajmer_-_10_Kursun/%28%20Kursun%201%20%29%20Sagopa%20Kajmer%20-%20Dilim%20Sert%2CRapim%20Mert%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Tek Yürek -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa_Kajmer_-_10_Kursun/%28%20Kursun%2010%20%29%20Sagopa%20Kajmer%20-%20Tek%20Y%C3%BCrek%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Pesimist Stil -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa_Kajmer_-_10_Kursun/%28%20Kursun%202%20%29%20Sagopa%20Kajmer%20-%20Pesimist%20Stil%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Katliama Karsi Geldi Iskence -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa_Kajmer_-_10_Kursun/%28%20Kursun%203%20%29%20Sagopa%20Kajmer%20-%20Katliama%20Karsi%20Geldi%20Iskence%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kendi Silahindan Ona -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa_Kajmer_-_10_Kursun/%28%20Kursun%204%20%29%20Sagopa%20Kajmer%20-%20Kendi%20Silahindan%20Ona%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Rapim Kuduz -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa_Kajmer_-_10_Kursun/%28%20Kursun%205%20%29%20Sagopa%20Kajmer%20-%20Rapim%20Kuduz%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kursun Marşı -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa_Kajmer_-_10_Kursun/%28%20Kursun%206%20%29%20Sagopa%20Kajmer%20ft.%20Ramiz%20-%20Kursun%20Mar%C5%9F%C4%B1%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Weack Mc`s -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa_Kajmer_-_10_Kursun/%28%20Kursun%207%20%29%20Sagopa%20Kajmer%20ft.%20Ceza%20-%20Weack%20Mc%60s%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Üçlü Kombine -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa_Kajmer_-_10_Kursun/%28%20Kursun%208%20%29%20Sagopa%20Kajmer%20ft.%20Cabbar%20-%20%C3%9C%C3%A7l%C3%BC%20Kombine%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Fittirik Flow -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282001%29Sagopa_Kajmer_-_10_Kursun/%28%20Kursun%209%20%29%20Sagopa%20Kajmer%20ft.%20Duman%20-%20Fittirik%20Flow%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ar Gelir Yakin",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20-%20Ar%20Gelir%20Yakin.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bir Savas Bin Ölü",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20-%20Bir%20Savas%20Bin%20%C3%96l%C3%BC.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Buralarda Ayaz Var",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20-%20Buralarda%20Ayaz%20Var.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Cenneti Sordum Yitirdiklerime",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20-%20Cenneti%20Sordum%20Yitirdiklerime.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Dünya Koca Mekan",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20-%20D%C3%BCnya%20Koca%20Mekan.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ekinoks",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20-%20Ekinoks.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Günah Tohumlari (Tabulari Yikan Adam)",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20-%20G%C3%BCnah%20Tohumlari%20%28Tabulari%20Yikan%20Adam%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Heyet Intro (Kuvvet Senaryo 2)",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20-%20Heyet%20Intro%20%28Kuvvet%20Senaryo%202%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Iki Dinle Bir Sus",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20-%20Iki%20Dinle%20Bir%20Sus.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Rap Eyleme",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20-%20Rap%20Eyleme.mp3",
        "duration": "CANLI"
    },
    {
        "title": "2001",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20feat.%20Ceza%20%26%20Sahtiyan%20-%202001.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Saltanatin Hakimleri",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20feat.%20Ceza%20-%20Saltanatin%20Hakimleri.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Dk",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20feat.%20Kuvvetmira%20Rap%20Stickz%20-%201%20Dk.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Benim Inim Hiphop",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20feat.%20Mista%20Brown%20-%20Benim%20Inim%20Hiphop.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Terör Damlalari",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20feat.%20Sagopa%20%26%20Ceza%20-%20Ter%C3%B6r%20Damlalari.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Localistik Sömürü",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20feat.%20Sagopa%20-%20Localistik%20S%C3%B6m%C3%BCr%C3%BC.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Illet-I Name",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20feat.%20Sahtiyan%20%26%20Mista%20Brown%20-%20Illet-I%20Name.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Melodrama",
        "artist": "Silahsız Kuvvet",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahsiz%20Kuvvet%20feat.%20Sahtiyan%20-%20Melodrama.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Silahsız Kuvvet Güneşimden Çekil",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29%20Silahsiz%20Kuvvet%20-%20Ihtiyar%20Heyet/Silahs%C4%B1z%20Kuvvet%20G%C3%BCne%C5%9Fimden%20%C3%87ekil.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer-Pesimist EP 2 FULL -",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer%20-%20Pesimist%20E.P%202/Sagopa%20Kajmer-Pesimist%20EP%202%20FULL%20-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Düşünen Ceset",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/01%20D%C3%BC%C5%9F%C3%BCnen%20Ceset.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Tımarlı Hastane",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/02%20T%C4%B1marl%C4%B1%20Hastane.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Son Durak Uçurum",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/03%20Son%20Durak%20U%C3%A7urum.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Aruz Ölçüsü",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/04%20Aruz%20%C3%96l%C3%A7%C3%BCs%C3%BC.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Tamu Otobüsü (Kuvvet Mira)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/05%20Tamu%20Otob%C3%BCs%C3%BC%20%28Kuvvet%20Mira%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Son Durak Uçurum (DJ Mic Check)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/06%20Son%20Durak%20U%C3%A7urum%20%28DJ%20Mic%20Check%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kanibal Aşiretleri",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/07%20Kanibal%20A%C5%9Firetleri.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Rap Candarbazı",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/08%20Rap%20Candarbaz%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Tamu Otobüsü (Original Version)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/09%20Tamu%20Otob%C3%BCs%C3%BC%20%28Original%20Version%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kan Mevsimi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/10%20Kan%20Mevsimi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Siktirin gidin",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/11%20Siktirin%20gidin.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İfrite Tamim",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/12%20%C4%B0frite%20Tamim.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Yeralt-ndaki Karanl-k",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/13%20Yeralt-ndaki%20Karanl-k.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ölüm Benim Dogum Günüm",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/17%20%C3%96l%C3%BCm%20Benim%20Dogum%20G%C3%BCn%C3%BCm.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Vusluta 5 Kala Leş",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282002%29Sagopa%20Kajmer/18%20Vusluta%205%20Kala%20Le%C5%9F.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Denklemli (İntro)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/56%20Denklemli%20%28%C4%B0ntro%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Analiz",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/Analiz.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Değişebilir Heran Adres (ft Nadiran a.k.a DJ Funky C)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/De%C4%9Fi%C5%9Febilir%20Heran%20Adres%20%28ft%20Nadiran%20a.k.a%20DJ%20Funky%20C%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Geçmişi Gölgeye Teslim Ettim",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/Ge%C3%A7mi%C5%9Fi%20G%C3%B6lgeye%20Teslim%20Ettim.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Karabiber Duası (ft. Kasırga)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/Karabiber%20Duas%C4%B1%20%28ft.%20Kas%C4%B1rga%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Karikatür Komedya",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/Karikat%C3%BCr%20Komedya.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kör Savaşçı (ft Mista Brown)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/K%C3%B6r%20Sava%C5%9F%C3%A7%C4%B1%20%28ft%20Mista%20Brown%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Maskeli Balo",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/Maskeli%20Balo.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Minimalite (ft Dr. Fuchs & Mista Brown)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/Minimalite%20%28ft%20Dr.%20Fuchs%20%26%20Mista%20Brown%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Mütalam",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/M%C3%BCtalam.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Rap Yaparken Günaha mı Girdim",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/Rap%20Yaparken%20G%C3%BCnaha%20m%C4%B1%20Girdim.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Tanrı Çekti Tüm Resimleri (ft Dr. Fuchs)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/Tanr%C4%B1%20%C3%87ekti%20T%C3%BCm%20Resimleri%20%28ft%20Dr.%20Fuchs%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Uğurla Bahtiyarlar",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/U%C4%9Furla%20Bahtiyarlar.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İskeletler Diyarında Bir Et Parçası",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD1%20Karanl%C4%B1k%20Damlalar/%C4%B0skeletler%20Diyar%C4%B1nda%20Bir%20Et%20Par%C3%A7as%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "24",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/24.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Baghdat",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Baghdat.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Didaktik Kitaplar",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Didaktik%20Kitaplar.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Etki Tepki (Orij. Versiyon ft Mista Brown)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Etki%20Tepki%20%28Orij.%20Versiyon%20ft%20Mista%20Brown%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kalbim Krizin Bekçisi Olmuş",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Kalbim%20Krizin%20Bek%C3%A7isi%20Olmu%C5%9F.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kalp Atışlarım 78 BPM (ft Kolera)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Kalp%20At%C4%B1%C5%9Flar%C4%B1m%2078%20BPM%20%28ft%20Kolera%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Küheylan",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/K%C3%BCheylan.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Manzumu Mazlum Dinledi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Manzumu%20Mazlum%20Dinledi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Proportions (Karabiber Duası 2)(ft Toolz)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Proportions%20%28Karabiber%20Duas%C4%B1%202%29%28ft%20Toolz%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Rap Gafil",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Rap%20Gafil.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer Bir Pesimistin Gözyaşları",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Sagopa%20Kajmer%20Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer-Sagolad-m Beyinleri",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Sagopa%20Kajmer-Sagolad-m%20Beyinleri.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Stilo",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Stilo.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Yokluk İçinde Varlık Çeksemde (ft Dr. Duchs)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/Yokluk%20%C4%B0%C3%A7inde%20Varl%C4%B1k%20%C3%87eksemde%20%28ft%20Dr.%20Duchs%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Üfle Güneşi Sönsün",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/%C3%9Cfle%20G%C3%BCne%C5%9Fi%20S%C3%B6ns%C3%BCn.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İyi Geceler (Outro)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282003%29Sagopa%20Kajmer-Bir%20Pesimistin%20G%C3%B6zya%C5%9Flar%C4%B1%20CD2%20Melankolik%20Damlalar/%C4%B0yi%20Geceler%20%28Outro%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İhtiva Reçetesi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282004%29-%20Sagopa%20Kajmer%20-%20GORA%20Soundtrack/Sagopa%20Kajmer%20-%20%C4%B0htiva%20Re%C3%A7etesi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer al bide burdan yak",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282004%29-%20Sagopa%20Kajmer%20-%20GORA%20Soundtrack/sagopa%20kajmer%20al%20bide%20burdan%20yak.mp3",
        "duration": "CANLI"
    },
    {
        "title": "SAGOPA KAJMER Disstortion EP",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Disstortion%20EP/SAGOPA%20KAJMER%20Disstortion%20EP.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Romantizma",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/02%20Romantizma.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bebeğim Öldü",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/03%20Bebe%C4%9Fim%20%C3%96ld%C3%BC.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Vasiyet",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/04%20Vasiyet.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Leyli",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/06%20Leyli.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Rak Benadam (Featuring Tact Allstars)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/07%20Rak%20Benadam%20%28Featuring%20Tact%20Allstars%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Beatil Rhyme",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/09%20Beatil%20Rhyme.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Yaşlı Planet",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/10%20Sagopa%20Ya%C5%9Fl%C4%B1%20Planet.mp3",
        "duration": "CANLI"
    },
    {
        "title": "We Got Rimes (Feat Obscure)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/11%20We%20Got%20Rimes%20%28Feat%20Obscure%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Drama Yolları",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/12%20Drama%20Yollar%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kendime Sarılır Donarım",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/13%20Kendime%20Sar%C4%B1l%C4%B1r%20Donar%C4%B1m.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa vs Kolera",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/15%20Sagopa%20vs%20Kolera.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Terapi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/16%20Terapi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kopya Kalpler",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/17%20Kopya%20Kalpler.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Anektod (Feat Divine)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/18%20Anektod%20%28Feat%20Divine%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Hayat Arabamla 2005 Mil",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/19%20Hayat%20Arabamla%202005%20Mil.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Rüyalarımdaki İşaretler (Feat Leadri)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/20%20R%C3%BCyalar%C4%B1mdaki%20%C4%B0%C5%9Faretler%20%28Feat%20Leadri%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Çaçaron",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/21%20%C3%87a%C3%A7aron.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Pavlov'un Köpeği",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/22%20Pavlov%27un%20K%C3%B6pe%C4%9Fi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bana Müsade Beyler",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282005%29Sagopa%20Kajmer%20-%20Romantizma/23%20Bana%20M%C3%BCsade%20Beyler.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Baytar",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282006%29Sapoga%20Kajmer%20%26%20Kuvvetmira%20-%20Kafile/01%20Sagopa%20Kajmer%20-%20Baytar.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sansür Perdesi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282006%29Sapoga%20Kajmer%20%26%20Kuvvetmira%20-%20Kafile/05%20Sagopa%20Kajmer%20ft%20Sitem%20Depresif%20%26%20Mozole%20Mirach%20-%20Sans%C3%BCr%20Perdesi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "La Kayyume İllahu",
        "artist": "06 Kolera",
        "src": "https://archive.org/download/Blackfm/%282006%29Sapoga%20Kajmer%20%26%20Kuvvetmira%20-%20Kafile/06%20Kolera%20-%20La%20Kayyume%20%C4%B0llahu.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sevemedim Vedaları",
        "artist": "09 Kolera feat Mozole Mirach",
        "src": "https://archive.org/download/Blackfm/%282006%29Sapoga%20Kajmer%20%26%20Kuvvetmira%20-%20Kafile/09%20Kolera%20feat%20Mozole%20Mirach%20-%20Sevemedim%20Vedalar%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Onca Sancı Varken",
        "artist": "11 Mozole Mirach",
        "src": "https://archive.org/download/Blackfm/%282006%29Sapoga%20Kajmer%20%26%20Kuvvetmira%20-%20Kafile/11%20Mozole%20Mirach%20-%20Onca%20Sanc%C4%B1%20Varken.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İstisnalar Kaideyi Bozmaz",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282006%29Sapoga%20Kajmer%20%26%20Kuvvetmira%20-%20Kafile/12%20Sagopa%20Kajmer%20-%20%C4%B0stisnalar%20Kaideyi%20Bozmaz.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Eşgalimdi Eşkiya",
        "artist": "13 Abluka Alarm",
        "src": "https://archive.org/download/Blackfm/%282006%29Sapoga%20Kajmer%20%26%20Kuvvetmira%20-%20Kafile/13%20Abluka%20Alarm%20-%20E%C5%9Fgalimdi%20E%C5%9Fkiya.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kuvvetmira Rap Stickz",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282006%29Sapoga%20Kajmer%20%26%20Kuvvetmira%20-%20Kafile/16%20Kuvvetmira%20Rap%20Stickz.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İntro",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/01%20%C4%B0ntro.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ne Bilirsin",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/02%20Ne%20Bilirsin.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Monotonluk Maratonu",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/03%20Monotonluk%20Maratonu.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bir Var Bir Yok (Featuring Critical Of Critical Madness)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/04%20Bir%20Var%20Bir%20Yok%20%28Featuring%20Critical%20Of%20Critical%20Madness%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sampiyonu Sikar Yaris",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/05%20Sampiyonu%20Sikar%20Yaris.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Gam Tozu Ve Dunyanin Ninnisi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/06%20Gam%20Tozu%20Ve%20Dunyanin%20Ninnisi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bagli Hayatim Pamuk İpligine",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/07%20Bagli%20Hayatim%20Pamuk%20%C4%B0pligine.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Süper İkili",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/09%20S%C3%BCper%20%C4%B0kili.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kendim İçin",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/10%20Kendim%20%C4%B0%C3%A7in.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Af Benim İsim Degil",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/11%20Af%20Benim%20%C4%B0sim%20Degil.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kolaysa Anlat",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/12%20Kolaysa%20Anlat.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Fani",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/13%20Fani.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Emcee Testi (feat contribution x)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/15%20Emcee%20Testi%20%28feat%20contribution%20x%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Şahit Varsa Konuşsun",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/16%20%C5%9Eahit%20Varsa%20Konu%C5%9Fsun.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Yarım Gönülle Bir Öpüş",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/17%20Yar%C4%B1m%20G%C3%B6n%C3%BClle%20Bir%20%C3%96p%C3%BC%C5%9F.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Can Havli",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/18%20Can%20Havli.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Malum Tahrip İzleri",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/19%20Malum%20Tahrip%20%C4%B0zleri.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Herkesin Bir Sucu Var",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282007%29Sagopa%20Kajmer%20%26%20Kolera%20-%C4%B0kimizi%20Anlatan%20Birsey/20%20Herkesin%20Bir%20Sucu%20Var.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ben Husrana Komsuyum",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20Ben%20Husrana%20Komsuyum%20.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bir Cikar Yolum Yok",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20Bir%20Cikar%20Yolum%20Yok.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Dessas",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20Dessas%20.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Dusersem Yanarim",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20Dusersem%20Yanarim.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Düşenin Dostu Olmaz",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20D%C3%BC%C5%9Fenin%20Dostu%20Olmaz.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Gölge Haramileri",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20G%C3%B6lge%20Haramileri.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Gördüklerime inanmam gerek",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20G%C3%B6rd%C3%BCklerime%20inanmam%20gerek.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kötü İnsanları Tanıma Senesi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sahibinin Sesi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20Sahibinin%20Sesi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sonumuz Yakın Mesafe",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20Sonumuz%20Yak%C4%B1n%20Mesafe.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Tek Başınalığın Yolcusu",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20Tek%20Ba%C5%9F%C4%B1nal%C4%B1%C4%9F%C4%B1n%20Yolcusu.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Yakın ve Uzak",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20Kajmer%20-%20Yak%C4%B1n%20ve%20Uzak.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bir Kulaç Daha Atsam Karadayım",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20kajmer%20%20-%20Bir%20Kula%C3%A7%20Daha%20Atsam%20Karaday%C4%B1m%20.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Vesselam",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/Sagopa%20kajmer%20-%20Vesselam.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Iki Tanik",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/sagopa%20Kajmer%20-%20%20Iki%20Tanik.mp3",
        "duration": "CANLI"
    },
    {
        "title": "beyaban",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282008%29Sagopa%20Kajmer%20K%C3%B6t%C3%BC%20%C4%B0nsanlar%C4%B1%20Tan%C4%B1ma%20Senesi.Net/sagopa%20kajmer%20-%20beyaban.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer & pesimist orkestra-sürahi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29%20Sagopa%20Kajmer%20-%20Saydolik%20EP/02-sagopa%20kajmer%20%26%20pesimist%20orkestra-s%C3%BCrahi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer & pesimist orkestra-kargaların kargaşası",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29%20Sagopa%20Kajmer%20-%20Saydolik%20EP/03-sagopa%20kajmer%20%26%20pesimist%20orkestra-kargalar%C4%B1n%20karga%C5%9Fas%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer & pesimist orkestra-bilinmezlik",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29%20Sagopa%20Kajmer%20-%20Saydolik%20EP/04-sagopa%20kajmer%20%26%20pesimist%20orkestra-bilinmezlik.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer & pesimist orkestra-budala kuş",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29%20Sagopa%20Kajmer%20-%20Saydolik%20EP/05-sagopa%20kajmer%20%26%20pesimist%20orkestra-budala%20ku%C5%9F.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer-ask yok artik",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/01-sagopa%20kajmer-ask%20yok%20artik.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer-atesten gomlek",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/02-sagopa%20kajmer-atesten%20gomlek.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer-muamma",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/03-sagopa%20kajmer-muamma.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer-firtına ve simsek",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/04-sagopa%20kajmer-firt%C4%B1na%20ve%20simsek.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer-hep taarruz var",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/05-sagopa%20kajmer-hep%20taarruz%20var.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Outro - Drama Turnz",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/Sagopa%20-%20Outro%20-%20Drama%20Turnz.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Droppin'em 2009",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/Sagopa%20Kajmer%20-%20Droppin%27em%202009.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kırık Çocuk",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/Sagopa%20Kajmer%20-%20K%C4%B1r%C4%B1k%20%C3%87ocuk.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer- Dil Yaratmakta En Asil Silahları",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/Sagopa%20Kajmer-%20Dil%20Yaratmakta%20En%20Asil%20Silahlar%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa_Kajmer-Marifetname",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/Sagopa_Kajmer-Marifetname.mp3",
        "duration": "CANLI"
    },
    {
        "title": "şikayetname",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/sagopa%20kajmer%20-%20%C5%9Fikayetname.mp3",
        "duration": "CANLI"
    },
    {
        "title": "muhendisi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282009%29Sagopa%20Kajmer%20-%20%C5%9Eark%C4%B1%20koleksiyoncusu/sagopa%20kajmer%20cumle%20-%20muhendisi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bu Böyledir",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/01.%20Bu%20B%C3%B6yledir.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Merhametine Dön",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/02.%20Merhametine%20D%C3%B6n.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Terk-i Diyar",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/03.%20Terk-i%20Diyar.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Mevsimler Gibisin",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/04.%20Mevsimler%20Gibisin.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bir Dizi İz",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/05.%20Bir%20Dizi%20%C4%B0z.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Zaman Alacak İntikamımı",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/06.%20Zaman%20Alacak%20%C4%B0ntikam%C4%B1m%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İyi Bilirim",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/07.%20%C4%B0yi%20Bilirim.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Tadı Yok",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/08.%20Tad%C4%B1%20Yok.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ne Olur",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/09.%20Ne%20Olur.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bana Ninni Okumayın",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/10.%20Bana%20Ninni%20Okumay%C4%B1n.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sen Hiç Sevmeyi Bilmezsin",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/11.%20Sen%20Hi%C3%A7%20Sevmeyi%20Bilmezsin.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İçeriz Aynı Tastan",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/12.%20%C4%B0%C3%A7eriz%20Ayn%C4%B1%20Tastan.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Gidenler",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/13.%20Gidenler.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ayılırsın Ve Anlarsın",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/14.%20Ay%C4%B1l%C4%B1rs%C4%B1n%20Ve%20Anlars%C4%B1n.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Onlarıda Anlıyorum",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/15.%20Onlar%C4%B1da%20Anl%C4%B1yorum.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Scratch Diploma",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282010%29Sagopa%20Kajmer%20%26%20Kolera%20-%20Bendeki%20Sen/16.%20Scratch%20Diploma.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İnsafa Gel",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282011%29Sagopa%20Kajmer%20-%20Saydam%20Odalar/01.%20%C4%B0nsafa%20Gel.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Herkes",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282011%29Sagopa%20Kajmer%20-%20Saydam%20Odalar/03.%20Herkes.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kaç Kaçabilirsen ( featuring Kolera )",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282011%29Sagopa%20Kajmer%20-%20Saydam%20Odalar/04.%20Ka%C3%A7%20Ka%C3%A7abilirsen%20%28%20featuring%20Kolera%20%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Çünkü Bir Tek Yol Var",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282011%29Sagopa%20Kajmer%20-%20Saydam%20Odalar/05.%20%C3%87%C3%BCnk%C3%BC%20Bir%20Tek%20Yol%20Var.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bu İşlerden Elini Çek (featuring Kolera)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282011%29Sagopa%20Kajmer%20-%20Saydam%20Odalar/06.%20Bu%20%C4%B0%C5%9Flerden%20Elini%20%C3%87ek%20%28featuring%20Kolera%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ardından Bakarım",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282011%29Sagopa%20Kajmer%20-%20Saydam%20Odalar/07.%20Ard%C4%B1ndan%20Bakar%C4%B1m.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Galiba ( 80's Groove Mix )",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282011%29Sagopa%20Kajmer%20-%20Saydam%20Odalar/09.%20Galiba%20%28%2080%27s%20Groove%20Mix%20%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Galiba ( Chilly Hip Hop Mix )",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282011%29Sagopa%20Kajmer%20-%20Saydam%20Odalar/12.%20Galiba%20%28%20Chilly%20Hip%20Hop%20Mix%20%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kapılar Açılır... (intro)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/01.%20Sagopa%20Kajmer%20-%20Kap%C4%B1lar%20A%C3%A7%C4%B1l%C4%B1r...%20%28intro%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Uzun Yollara Devam",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/02.%20Sagopa%20Kajmer%20-%20Uzun%20Yollara%20Devam.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Benim Hayatım",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/03.%20Sagopa%20Kajmer%20-%20Benim%20Hayat%C4%B1m.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Yaptığın Hatalar Kadar Büyük Olmadın",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/04.%20Sagopa%20Kajmer%20-%20Yapt%C4%B1%C4%9F%C4%B1n%20Hatalar%20Kadar%20B%C3%BCy%C3%BCk%20Olmad%C4%B1n.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bulun",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/05.%20Sagopa%20Kajmer%20-%20Bulun.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Istakoz",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/06.%20Sagopa%20Kajmer%20-%20Istakoz.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Baytar",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/07.%20Sagopa%20Kajmer%20-%20Baytar.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bugünün Elleri Boştu Ya Yarın",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/08.%20Sagopa%20Kajmer%20-%20Bug%C3%BCn%C3%BCn%20Elleri%20Bo%C5%9Ftu%20Ya%20Yar%C4%B1n.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Meftun",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/09.%20Sagopa%20Kajmer%20-%20Meftun.mp3",
        "duration": "CANLI"
    },
    {
        "title": "İster İstemez (ft. Kolera)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/10.%20Sagopa%20Kajmer%20-%20%C4%B0ster%20%C4%B0stemez%20%28ft.%20Kolera%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kalp Hastası",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/11.%20Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sabah Fabrikam",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/12.%20Sagopa%20Kajmer%20-%20Sabah%20Fabrikam.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Düşünmek İçin Vaktin Var",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/13.%20Sagopa%20Kajmer%20-%20D%C3%BC%C5%9F%C3%BCnmek%20%C4%B0%C3%A7in%20Vaktin%20Var.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Durdur Beni",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/14.%20Sagopa%20Kajmer%20-%20Durdur%20Beni.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Susmak İçin Yok Bahanem",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/15.%20Sagopa%20Kajmer%20-%20Susmak%20%C4%B0%C3%A7in%20Yok%20Bahanem.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Karne",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/16.%20Sagopa%20Kajmer%20-%20Karne.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Taşlama",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/17.%20Sagopa%20Kajmer%20-%20Ta%C5%9Flama.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Dalgın",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/18.%20Sagopa%20Kajmer%20-%20Dalg%C4%B1n.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ve Kapılar Kapanır (outro)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/19.%20Sagopa%20Kajmer%20-%20Ve%20Kap%C4%B1lar%20Kapan%C4%B1r%20%28outro%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Enes_Alper_107_Track",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/%282013%29Sagopa%20Kajmer%20-%20Kalp%20Hastas%C4%B1/Enes_Alper_107_Track.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer Feat Dumanyak - Doğar Yaşar Ölür",
        "artist": "04",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/04%20-%20Sagopa%20Kajmer%20Feat%20Dumanyak%20-%20Do%C4%9Far%20Ya%C5%9Far%20%C3%96l%C3%BCr.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ceza Ve Sagopa Kajmer Sanal Alem Delikanl-lar- (DJ_FERHAT)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Ceza%20Ve%20Sagopa%20Kajmer%20Sanal%20Alem%20Delikanl-lar-%20%28DJ_FERHAT%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Boom",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Derin%20Darbe%20Feat%20Sagopa%20Kajmer%20-%20Boom.mp3",
        "duration": "CANLI"
    },
    {
        "title": "-lim -rfan Yurdu",
        "artist": "Dj Mic Check",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Dj%20Mic%20Check%20-%20-lim%20-rfan%20Yurdu.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Piston",
        "artist": "Dj Mic Check",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Dj%20Mic%20Check%20-%20Piston.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Dr.Fuchs Feat Sagopa Kajmer Kara Maskeli -stanbul",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Dr.Fuchs%20Feat%20Sagopa%20Kajmer%20Kara%20Maskeli%20-stanbul.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Amerikancıklara Mesaj (Hassickdir III)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Fuat%20ft.%20Sagopa%20Kajmer%2C%20Ceza%2C%20Sahtiyan%2C%20Emre%20-%20Amerikanc%C4%B1klara%20Mesaj%20%28Hassickdir%20III%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Fok",
        "artist": "Kuvvetmira",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Kuvvetmira%20-%20Fok.mp3",
        "duration": "CANLI"
    },
    {
        "title": "SAGOPA KAJMER -C-MDEK- SEYTANIN ENSES-NDEY-M",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/SAGOPA%20KAJMER%20-C-MDEK-%20SEYTANIN%20ENSES-NDEY-M.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ultimate (Prod. by SHI 360)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/SHI%20360%20%D7%A9%D7%99%20ft%20Sagopa%20Kajmer%20-%20Ultimate%20%28Prod.%20by%20SHI%20360%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "NeDeNsE",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20%26amp%3B%20Dr%20Fuchs%20-%20NeDeNsE.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Hade Hade Hooy - Güneşin Battığı Yere Bak Ve Gülümse 2013 Upload",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20%26amp%3B%20Dr.%20HipHop%20-%20Hade%20Hade%20Hooy%20-%20G%C3%BCne%C5%9Fin%20Batt%C4%B1%C4%9F%C4%B1%20Yere%20Bak%20Ve%20G%C3%BCl%C3%BCmse%202013%20Upload.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kuduz Rap",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20%26amp%3B%20IQ%20-%20Kuduz%20Rap.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer &amp; Kolera      Foseptik",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20%26amp%3B%20Kolera%20%20%20%20%20%20Foseptik.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer &amp; Kolera Günlerim Ağlak",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20%26amp%3B%20Kolera%20G%C3%BCnlerim%20A%C4%9Flak.mp3",
        "duration": "CANLI"
    },
    {
        "title": "-yi Geceler Outro (Lyrics - -ark- Sözlü)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20-yi%20Geceler%20Outro%20%28Lyrics%20-%20-ark-%20S%C3%B6zl%C3%BC%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Be Be Ben SagopaYım",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20Be%20Be%20Ben%20SagopaY%C4%B1m.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Dr. Fuchs - Filmin Son Karesi",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20Dr.%20Fuchs%20-%20Filmin%20Son%20Karesi.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Dünya ( Yeni Sarki ) 2011",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20D%C3%BCnya%20%28%20Yeni%20Sarki%20%29%202011.mp3",
        "duration": "CANLI"
    },
    {
        "title": "HAIN ft. Kolera",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20HAIN%20ft.%20Kolera.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Ho-çakal",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20Ho-%C3%A7akal.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Kambur Kelimat",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20Kambur%20Kelimat.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Linguistiks (ft. Supreme Hebrew Intelekt)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20Linguistiks%20%28ft.%20Supreme%20Hebrew%20Intelekt%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Neyim Varki - Cezasiz - Ceza yok - HD",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20Neyim%20Varki%20-%20Cezasiz%20-%20Ceza%20yok%20-%20HD.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Pesimist Karamsar",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20Pesimist%20Karamsar.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Yağmur (Sago Verse)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20-%20Ya%C4%9Fmur%20%28Sago%20Verse%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer 40",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%2040.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer Anla Burası Dünya",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20Anla%20Buras%C4%B1%20D%C3%BCnya.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer Yamyam Organizmalar",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20Yamyam%20Organizmalar.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer feat Mt. Tek kanatl- ku-",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20feat%20Mt.%20Tek%20kanatl-%20ku-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Üç Sefil -air",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20ft%20Derin%20Darbe%20-%20%C3%9C%C3%A7%20Sefil%20-air.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Bu -ark-y- Zevk -çin Yapt-k -2008-",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%20ft%20Kolera%20-%20Bu%20-ark-y-%20Zevk%20-%C3%A7in%20Yapt-k%20-2008-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Köle Gibi (sample İzel)",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer%2CFuchs%20%26amp%3B%20Mista%20Brown%20-%20K%C3%B6le%20Gibi%20%28sample%20%C4%B0zel%29.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer-Ben Cocukmuyum",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer-Ben%20Cocukmuyum.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer-Dr Fuchs Tanr- Çekti Tüm Resimleri",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer-Dr%20Fuchs%20Tanr-%20%C3%87ekti%20T%C3%BCm%20Resimleri.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer-Nedense",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer-Nedense.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmer-İskeletler Diyarında Bir Et Parçası",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmer-%C4%B0skeletler%20Diyar%C4%B1nda%20Bir%20Et%20Par%C3%A7as%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa Kajmerin 45 Efsane Nakaratı",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20Kajmerin%2045%20Efsane%20Nakarat%C4%B1.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Gerçek",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20ft.%20Sirhot%20-%20Ger%C3%A7ek.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Sagopa kajmer   Beslenme çantam",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/Sagopa%20kajmer%20%20%20Beslenme%20%C3%A7antam.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa ceza ruyalar Wwww.RapGencLik.ORG",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/sagopa%20ceza%20ruyalar%20Wwww.RapGencLik.ORG.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sagopa kajmer &amp; leadri -karanlık satırlar",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/sagopa%20kajmer%20%26amp%3B%20leadri%20-karanl%C4%B1k%20sat%C4%B1rlar.mp3",
        "duration": "CANLI"
    },
    {
        "title": "Akl-m-n odalar-",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/sagopa%20kajmer%20-%20Akl-m-n%20odalar-.mp3",
        "duration": "CANLI"
    },
    {
        "title": "sper sperm",
        "artist": "Sagopa Kajmer",
        "src": "https://archive.org/download/Blackfm/Sagopa%20Kajmer%20-%20Alb%C3%BCmd%C4%B1%C5%9F%C4%B1/sagopa%20kajmer%20-%20sper%20sperm.mp3",
        "duration": "CANLI"
    }
],

  // Şarkı aralarına girecek Jingle'lar
  jingles: [
    {
      title: "Black FM Jingle 2",
      artist: "BLACK FM",
      src: "jingles/J2.mp3"
    },
    {
      title: "Black FM Jingle 3",
      artist: "BLACK FM",
      src: "jingles/J3.mp3"
    },
    {
      title: "Black FM Jingle 4",
      artist: "BLACK FM",
      src: "jingles/J4.mp3"
    },
    {
      title: "Black FM Jingle 5",
      artist: "BLACK FM",
      src: "jingles/J5.mp3"
    },
    {
      title: "Black FM Retro Dial-Up ID",
      artist: "System Sound",
      src: "https://www.soundjay.com/communication/sounds/dial-up-modem-01.mp3"
    },
    {
      title: "Black FM Radio Static Transition",
      artist: "Radio Noise",
      src: "https://www.soundjay.com/misc/sounds/radio-static-05.mp3"
    }
  ]
};
