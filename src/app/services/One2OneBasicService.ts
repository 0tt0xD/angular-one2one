import { Injectable } from '@angular/core';
import { Chapter } from '../models/Chapter';

@Injectable({
    providedIn: 'root'
})
export class One2OneBasicService {

    public getChapter(index : number) {
        return this.getChapters()[index]
    }


    public getChapters() : Chapter[] {
        return [
            {
                "chapter_name":"Design",
                "icon":"tree.png",
                "content": [
                    {
                      "subtitle":"Wir Mensch",
                      "content": [
                        { 
                          "type":"question", 
                          "text":"Welche Gedanken verbindest du mit dem Wort Bestimmung?"
                        },
                        { 
                          "type":"question", 
                          "text":"Hat die Menschheit eine Bestimmung?"
                        },
                        { 
                          "type":"question", 
                          "text":"Welche Bestimmung/ Vision siehst du für dein Leben?"
                        },
                        { 
                          "type":"question", 
                          "text":"Wie wichtig sind Beziehungen in deinem Leben und wer sind deine wichtigsten Beziehungen?"
                        },
                        { 
                          "type":"question", 
                          "text":"Könntest du dir das Leben auf der Erde alleine ohne andere Menschen vorstellen?"
                        },
                        { 
                          "type":"question", 
                          "text":"Was sind emotionale Grundbedürfnisse des Menschen?"
                        },
                        { 
                          "type":"question", 
                          "text":"Wie wichtig ist es für einen Menschen geliebt und angenommen zu sein und was ist, wenn sich ein Mensch nicht angenommen und ungeliebt fühlt?"
                        },
                        { 
                          "type":"question", 
                          "text":"Sind Menschen fähig zu Moral, Bewusstsein, Gerechtigkeit, Kreativität und warum?"
                        }
                      ]
                    },
                    {
                      "subtitle":"Wir Menschen und Gott",
                      "content": [
                      { 
                        "type":"bible", 
                        "text":"1.Mose 1,26-27.31 (Elb)",
                        "info":"Und Gott sprach: Lasst uns Menschen machen in unserm Bild, uns ähnlich [...] Und Gott schuf den Menschen nach seinem Bild, nach dem Bild Gottes schuf er ihn; als Mann und Frau schuf er sie. [...] Und Gott sah alles, was er gemacht hatte, und siehe, es war sehr gut."
                      },
                      { 
                        "type":"question", 
                        "text":"Was sagt der Text über Gott und uns als Menschen aus?"
                      },
                      { 
                        "type":"question", 
                        "text":"Wir sind Gott ähnlich: Was sagt das Wesen des Menschen über Gott aus?"
                      },
                      { 
                        "type":"question", 
                        "text":"Warum denkst du spricht Gott im Text von “uns” ?"
                      },
                      { 
                        "type":"question", 
                        "text":"Was bedeutet unser Text für den Wert (Würde) und Bestimmung des Menschen?"
                      }]
                    },
                    {
                      "subtitle":"Verbindung zwischen Gott und Mensch?",
                      "content": [
                      { 
                        "type":"bible", 
                        "text":"Matthäus 22,37-40 (NGÜ)",
                        "info":"Jesus antwortete: »›Du sollst den Herrn, deinen Gott, lieben von ganzem Herzen, mit ganzer Hingabe und mit deinem ganzen Verstand!‹ Dies ist das größte und wichtigste Gebot. Ein zweites ist ebenso wichtig: ›Liebe deine Mitmenschen wie dich selbst!‹ Mit diesen beiden Geboten ist alles gesagt, was das Gesetz und die Propheten fordern.«"
                      },
                      { 
                        "type":"question", 
                        "text":"Durch was soll die Verbindung von uns Menschen zu Gott geprägt sein?"
                      },
                      { 
                        "type":"question", 
                        "text":"Wie würde unsere Gesellschaft aussehen, wenn wir diesem Gebot folgen? "
                      },
                      { 
                        "type":"question", 
                        "text":"Wie würden unsere Beziehungen aussehen?"
                      },
                      { 
                        "type":"question", 
                        "text":"Was ist Gottes Absicht mit diesen Geboten und was sagt das über sein Wesen aus?"
                      },
                      { 
                        "type":"bible", 
                        "text":"Epheser 1, 5",
                        "info": "Aus Liebe hat er uns dazu bestimmt, seine Söhne und Töchter zu werden – durch Jesus Christus und im Blick auf ihn."
                      },
                      { 
                        "type":"question", 
                        "text":"Was zeichnet die Beziehung von einem Kind zu seinen Eltern aus?"
                      }]
                    },
                    {
                      "subtitle":"Kerngedanke und Herausforderung",
                      "content": [
                      { 
                        "type":"question", 
                        "text":"Was nimmst du mit von diesem Kapitel?"
                      },
                      { 
                        "type":"question", 
                        "text":"Welche Herausforderungen möchtest du annehmen?"
                      }]
                    }
                ]
            },
        
        
        
        
        
        
        
        
        
            {
                "chapter_name":"Errettung",
                "icon":"cross.png",
                "content":[ 
                {
                    "subtitle":"Einstieg",
                    "content":[
                    {
                        "type":"question",
                        "text":"Bist du schon einmal aus Gefahr gerettet worden?"
                    },
                    {
                        "type":"question",
                        "text":"Ist die Welt in der wir leben gerecht, warum bzw. warum nicht und was läuft schief?"
                    }]
                  },
                  {
                    "subtitle":"Gottes Maßstab",
                    "content":[
                    {
                        "type":"question",
                        "text":"Was denkst du fordert Gott von uns Menschen?"
                    },
                    {
                        "type":"question",
                        "text":"Denkst du du bist ein guter Mensch und warum? Welchen Maßstab legst du dabei an?"
                    },
                    {
                        "type":"question",
                        "text":"Erfüllst du deine eigenen Maßstäbe?"
                    },
                    {
                        "type":"bible",
                        "text":"Matthäus 15, 19",
                        "info":"Denn aus dem Herzen kommen böse Gedanken, Mord, Ehebruch, Unzucht, Diebstahl, falsche Zeugenaussagen und Lästerungen."
                    },
                    {
                        "type":"question",
                        "text":"Kannst du dieser Bibelstelle zustimmen, warum oder warum nicht?"
                    },
                    {
                        "type":"question",
                        "text":"Gehen alle Gedanken in die Tat über? Sind sie deshalb weniger böse?"
                    },
                    {
                        "type":"question",
                        "text":"Was hält uns davon ab, dass wir böse Gedanken nicht in die Tat umsetzen?"
                    }]
                  },
                  {
                    "subtitle":"Trennung und Versöhnung /// Tod und Leben /// Gerechtigkeit und Ungerechtigkeit ///  Sünde und Errettung",
                    "content":[
                    {
                        "type":"bible",
                        "text":"Römer 6, 23",
                        "info":"Denn der Lohn der Sünde ist der Tod; das unverdiente Geschenk Gottes dagegen ist das ewige Leben durch Christus Jesus, unseren Herrn."
                    },
                    {
                        "type":"question",
                        "text":"Was ist Sünde?"
                    },
                    {
                        "type":"question",
                        "text":"Was meint die Bibelstelle mit „Tod“?"
                    },
                    {
                        "type":"question",
                        "text":"Wäre Gott gerecht wenn er Sünden nicht verurteilt?"
                    },
                    {
                        "type":"question",
                        "text":"Was sind die Auswirkungen von Sünden in unserem Leben, in der Gesellschaft und unseren Beziehungen? (Diebstahl, Mord, Lügen, Neid, Hass, Unvergebenheit, Eifersucht…)"
                    },
                    {
                        "type":"question",
                        "text":"Wie gehst du mit eigener Schuld in deinem Leben um? Warum gehst du so damit um?"
                    },
                    {
                        "type":"question",
                        "text":"Kann man Wiedergutmachung leisten? Wo geht das nicht und warum? Welchen Ausweg gibt es für solche Fälle?"
                    },
                    {
                        "type":"question",
                        "text":"Was ist das ewige Leben? Wann fängt das ewige Leben an?"
                    },
                    {
                        "type":"question",
                        "text":"Wie bekommen wir das Geschenk des ewigen Lebens?"
                    },
                    {
                        "type":"bible",
                        "text":"Lukas 23,39-43",
                        "info":"Auch einer der Verbrecher, die mit ihm gekreuzigt worden waren, lästerte: »Bist du denn nicht der Christus, der versprochene Retter? Dann hilf dir selbst und uns!« Aber der am anderen Kreuz wies ihn zurecht: »Du bist genauso zum Tode verurteilt worden wie dieser Mann. Fürchtest du Gott nicht einmal jetzt? Wir werden hier zu Recht bestraft. Wir bekommen, was wir verdient haben. Der hier aber ist unschuldig; er hat nichts Böses getan.« Dann sagte er: »Jesus, denk an mich, wenn du deine Herrschaft antrittst!« Da antwortete ihm Jesus: »Ich versichere dir: Noch heute wirst du mit mir im Paradies sein.«"
                    },
                    {
                        "type":"question",
                        "text":"Hat es der Verbrecher verdient errettet zu werden, warum bzw. warum nicht?"
                    },
                    {
                        "type":"question",
                        "text":"Denkst du er hat ein Gutes Leben geführt?"
                    },
                    {
                        "type":"question",
                        "text":"Was unterscheidet die beiden Verbrecher?"
                    },
                    {
                        "type":"question",
                        "text":"Wieso wurde der zweite Verbrecher gerettet?"
                    },
                    {
                        "type":"bible",
                        "text":"2. Korinther 5, 21",
                        "info":"Denn Gott hat Christus, der ohne jede Sünde war, mit all unserer Schuld beladen und verurteilt, damit wir freigesprochen sind und vor ihm bestehen können."
                    }]
                  },
                  {
                    "subtitle":"Kerngedanke und Herausforderung",
                    "content":[
                    {
                        "type":"bible",
                        "text":"Was nimmst du mit aus diesem Kapitel?"
                    },
                    {
                        "type":"bible",
                        "text":"Was hält dich davon ab das Geschenk Jesu, von dem wir gesprochen haben, anzunehmen?"
                        }]
                    }
                ]
            },
        
        
        
        
        
        
        
        
        
        
        
        
            {
                "chapter_name":"Herrschaft und Nachfolge",
                "icon":"crown.png",
                "content":[ 
                {
                    "subtitle":"Einstieg",
                    "content":[
                    {
                        "type":"question",
                        "text":"Wo hast du gute und schlechte Leiterschaft erlebt?"
                    },
                    {
                        "type":"question",
                        "text":"Was brauchst du um jemandem zu folgen?"
                    },
                    {
                        "type":"bible",
                        "text":"Lukas 6, 46 (Elb)",
                        "info":"Jesus: „Was nennt ihr mich aber Herr, Herr, und tut nicht, was ich euch sage?“"
                    },
                    {
                        "type":"bible",
                        "text":"Matthäus 7, 21",
                        "info":"Nicht alle Menschen, die sich fromm gebärden, glauben an Gott. Auch wenn sie “Herr“ zu mir sagen, heißt das noch lange nicht, dass sie ins Himmelreich kommen. Entscheidend ist, ob sie meinem Vater im Himmel gehorchen."
                    },
                    {
                        "type":"question",
                        "text":"Was verlangt Jesus von seinen Nachfolgern?"
                    },
                    {
                        "type":"question",
                        "text":"“Practice what you preach” - warum?"
                    },
                    {
                        "type":"question",
                        "text":"Was heißt das Wort „Glauben“ für dich und wie hängt es mit deinem Handeln zusammen?"
                    },
                    {
                        "type":"bible",
                        "text":"Apostelgeschichte 2, 36",
                        "info":"So soll nun jedermann in Israel sicher wissen, dass Gott diesen Jesus, den ihr gekreuzigt habt, zum Herrn und Christus gemacht hat!"
                    },
                    {
                        "type":"question",
                        "text":"Unter welchen Bedingungen kannst du einem Herrscher vertrauen?"
                    },
                    {
                        "type":"question",
                        "text":"Von wem und wofür ist Jesus zum Herrn gemacht worden?"
                    },
                    {
                        "type":"youtube",
                        "text":"Themenvideo: Der Messias",
                        "link":"https://youtu.be/TDCCElmQu60"
                    }]
                  },
                  {
                    "subtitle":"Nach Gottes Willen leben",
                    "content":[
                    {
                        "type":"question",
                        "text":"Denkst du es ist anstrengend Jesus nachzufolgen und seine Gebote zu befolgen und warum?"
                    },
                    {
                        "type":"bible",
                        "text":"Hesekiel 36, 26-27",
                        "info":"Ich gebe euch ein neues Herz und einen neuen Geist: Das versteinerte Herz nehme ich aus eurer Brust und gebe euch ein lebendiges dafür. Ich lege meinen Geist in euch und bewirke, dass ihr meinen Gesetzen folgt und euch nach meinen Rechtsbestimmungen richtet."
                    },
                    {
                        "type":"question",
                        "text":"Hast du schon einmal Dinge erlebt, die das Herz hart machen?"
                    },
                    {
                        "type":"question",
                        "text":"Was bedeutet es ein lebendiges Herz zu haben?"
                    },
                    {
                        "type":"question",
                        "text":"Wie ist es möglich nach Gottes Willen leben? Ist Scheitern erlaubt?"
                    },
                    {
                        "type":"question",
                        "text":"Was ist der Kerngedanke dieses Kapitels gewesen?"
                    }]
                  },
                  {
                    "subtitle":"Das Zentrum von Jesu Willen",
                    "content":[
                    {
                        "type":"bible",
                        "text":"Matthäus 22, 37",
                        "info":"esus antwortete: „Du sollst den Herrn, deinen Gott, lieben, von ganzem Herzen, mit ganzer Seele und mit all deinen Gedanken!"
                    },
                    {
                        "type":"question",
                        "text":"Kann man Liebe befehlen?"
                    },
                    {
                        "type":"question",
                        "text":"Was hat das befolgen von Jesu Geboten mit unserem Verstand und unseren Gefühlen zu tun?"
                    },
                    {
                        "type":"question",
                        "text":"Ist es blinder Glaube oder darf ich meinen Verstand/Gedanken gebrauchen?"
                    },
                    {
                        "type":"question",
                        "text":"Wie denkst du würde dein Leben aussehen, wenn Jesus dort Herr wäre? Möchtest du Prioritäten ändern?"
                    }]
                  }
                ]
            },
        
        
        
        
        
        
        
        
        
        
        
            {
                "chapter_name":"Umkehr zu Gott",
                "icon":"hand.png",
                "content":[ 
                {
                    "subtitle":"Einstieg",
                    "content":[
                    {
                        "type":"question",
                        "text":"Was waren deine drei schönsten Erlebnisse mit deinem Vater?"
                    },
                    {
                        "type":"question",
                        "text":"Was hättest du dir von deinem Vater gewünscht?"
                    },
                    {
                        "type":"bible",
                        "text":"Geschichte verlorener Sohn (Bibel)"
                    },
                    {
                        "type":"question",
                        "text":"Wie würdest du das Verhalten des Sohnes beschreiben, der den Vater verlässt. Was ist seine Motivation?"
                    },
                    {
                        "type":"question",
                        "text":"Was denkst du wie sich der Vater fühlt, als sein Sohn ihn verlässt?"
                    },
                    {
                        "type":"question",
                        "text":"Warum kehrt der Sohn um?"
                    },
                    {
                        "type":"question",
                        "text":"Wie verhält der Vater sich als sein Sohn zurückkommt? Was überrascht dich?"
                    },
                    {
                        "type":"question",
                        "text":"Denkst du dieses Erlebnis hat den Sohn verändert, warum bzw. warum nicht?"
                    },
                    {
                        "type":"question",
                        "text":"Was denkst du treibt ihn in Zukunft an ein „guter Sohn“ zu sein und bei Fehlern immer wieder umzukehren?"
                    },
                    {
                        "type":"action",
                        "text":"Darf ich meine Geschichte zur Umkehr zu Gott mit dir teilen?"
                    },
                    {
                        "type":"question",
                        "text":"Was glaubst du persönlich wie Gott dich empfangen wird, wenn du umkehrst?"
                    },
                    {
                        "type":"question",
                        "text":"Was glaubst du ist der Herzschlag des Vaters für dich, was will er für dein Leben?"
                    },
                    {
                        "type":"question",
                        "text":"Wie ist deine Beziehung zu Gott im Moment? Kennst du ihn?"
                    }]
                  }
                ]
            },
        
        
        
        
        
        
        
        
        
        
        
            {
                "chapter_name":"Die Taufen",
                "icon":"holy-spirit.png",
                "content":[ 
                {
                    "subtitle":"Einstieg",
                    "content":[
                    {
                        "type":"question",
                        "text":"Hast du dir schon einmal gewünscht nochmals neu anfangen zu können oder eine andere Person zu sein und warum?"
                    }]
                },
                {
                  "subtitle":"Die Wassertaufe",
                  "content":[
                    {
                        "type":"question",
                        "text":"Was weißt du über die Taufe, was verbindest du damit?"
                    },
                    {
                        "type":"question",
                        "text":"Soll die Taufe deine eigene Entscheidung sein?"
                    },
                    {
                        "type":"question",
                        "text":"Gibt es Parallelen zwischen einer Hochzeit und der Taufe, wenn ja welche?"
                    },
                    {
                        "type":"bible",
                        "text":"Apg. 2, 37-38",
                        "info":"Als die Leute das [die Pfingstpredigt] hörten, waren sie von dieser Botschaft tief betroffen. Sie fragten Petrus und die anderen Apostel: »Brüder, was sollen wir tun?« »Kehrt um zu Gott!«, forderte Petrus sie auf. »Jeder von euch soll sich auf den Namen von Jesus Christus taufen lassen! Dann wird euch Gott eure Sünden vergeben, und ihr werdet den Heiligen Geist empfangen."
                    },
                    {
                        "type":"bible",
                        "text":"Römer. 6, 3-4",
                        "info":"Oder wisst ihr nicht, dass wir mit Jesus Christus gestorben sind, als wir auf seinen Namen getauft wurden? Denn durch die Taufe sind wir mit Christus gestorben und begraben. Und genauso wie Christus durch die herrliche Macht des Vaters von den Toten auferstanden ist, so können auch wir jetzt ein neues Leben führen."
                    },
                    {
                        "type":"question",
                        "text":"Wer soll sich taufen lassen und aus welcher Motivation?"
                    },
                    {
                        "type":"question",
                        "text":"“...gestorben und begraben” was bedeutet das im Zusammenhang mit der Taufe?"
                    },
                    {
                        "type":"question",
                        "text":"Wenn wir ein neues Leben führen sollen, was war das Alte und was ist das Neue?"
                    },
                    {
                        "type":"question",
                        "text":"Welchen Beitrag sollen wir in unserer eigenen Taufe leisten?"
                    },
                    {
                        "type":"question",
                        "text":"Durch welche Kraft sollen wir das neue Leben leben? Wie wird diese Kraft genannt?"
                    }]
                },
                {
                  "subtitle":"Taufe im Heiligen Geist",
                  "content":[
                    {
                        "type":"bible",
                        "text":"Matthäus 3, 11",
                        "info":"Johannes der Täufer: Ich taufe all diejenigen mit Wasser, die ihren Sünden den Rücken kehren und sich Gott zuwenden. Doch bald kommt einer, der ist viel stärker als ich - so viel gewaltiger, dass ich nicht einmal wert bin, sein Diener zu sein. Er wird euch mit dem Heiligen Geist und mit Feuer taufen."
                    },
                    {
                        "type":"question",
                        "text":"Was hast du bisher über die Taufe im Heiligen Geist gehört?"
                    },
                    {
                        "type":"question",
                        "text":"Was denkst du heißt es im heiligen Geist und Feuer getauft zu sein?"
                    },
                    {
                        "type":"bible",
                        "text":"Lukas 11, 13",
                        "info":"Wenn aber selbst ihr sündigen Menschen wisst, wie ihr euren Kindern Gutes tun könnt, wie viel eher wird euer Vater im Himmel denen, die ihn bitten, den Heiligen Geist schenken."
                    },
                    {
                        "type":"bible",
                        "text":"Apg. 8, 17",
                        "info":"Petrus und Johannes legten den Gläubigen nun die Hände auf, und sie empfingen den Heiligen Geist. Apostelgeschichte"
                    },
                    {
                        "type":"question",
                        "text":"Wann kann diese Taufe passieren und wodurch geschieht sie?"
                    },
                    {
                        "type":"bible",
                        "text":"1. Korinther 14,1.3-5",
                        "info":"Die Liebe soll euer höchstes Ziel sein. Aber bemüht euch auch um die besonderen Gaben, die der Geist zuteilt, vor allem um die Gabe der Prophetie... Wer dagegen prophetisch redet, der hilft anderen, im Glauben an den Herrn zu wachsen, und er ermutigt und tröstet sie. Wenn jemand in anderen Sprachen redet, wird er selbst dadurch im Glauben gestärkt; doch wer prophetisch redet, der stärkt die ganze Gemeinde. Ich wünschte, ihr alle hättet die Gabe, in Sprachen zu reden, aber noch mehr wünschte ich, ihr könntet alle prophetisch reden. Denn die Gabe der Prophetie ist wichtiger und nützlicher als das Reden in Sprachen, es sei denn, jemand erklärt den anderen, was es bedeutet, damit die ganze Gemeinde dadurch ermutigt wird."
                    },
                    {
                        "type":"question",
                        "text":"Was ist für dich neu in dieser Bibelstelle?"
                    },
                    {
                        "type":"question",
                        "text":"Was sagt dein gesunder Menschenverstand über diese Bibelstelle?"
                    },
                    {
                        "type":"question",
                        "text":"Wovon ist dein Verstand geprägt, wer oder was sagt dir was „normal“ ist?"
                    },
                    {
                        "type":"question",
                        "text":"Wozu schenkt Gott Christen diese Gaben?"
                    },
                    {
                        "type":"question",
                        "text":"Denkst du, du hast eine dieser Gaben?"
                    },
                    {
                        "type":"question",
                        "text":"Würdest du gerne im hl. Geist getauft werden?"
                    },
                    {
                        "type":"youtube",
                        "text":"Themenvideo: Der Heilige Geist",
                        "link":"https://youtu.be/53uIWLlDoZo"
                    }]
                }
                ]
            },
        
        
        
        
        
        
        
        
        
        
            {
                "chapter_name":"Kommunikation mit Gott",
                "icon":"pray.png",
                "content":[ 
                {
                    "subtitle":"Einstieg",
                    "content":[
                    {
                        "type":"question",
                        "text":"Was fällt dir ein, wenn du „Bibel“ als Stichwort hörst?"
                    },
                    {
                        "type":"question",
                        "text":"“Du bist nichts und du kannst nichts” …. hast du solche oder ähnlich Aussagen schon einmal über deine Person gehört und wie geht es dir damit? Wie geht du damit um?"
                    },
                    {
                        "type":"question",
                        "text":"Warum denkst du sollen wir die Bibel lesen?"
                    },
                    {
                        "type":"bible",
                        "text":"Johannes 8, 31-32",
                        "info":"Jesus: »Wenn ihr in meinem Wort bleibt, seid ihr wirklich meine Jünger, und ihr werdet die Wahrheit erkennen, und die Wahrheit wird euch frei machen.«"
                    },
                    {
                        "type":"bible",
                        "text":"Johannes 14, 6",
                        "info":"Ich bin der Weg, die Wahrheit und das Leben. Niemand kommt zum Vater außer durch mich"
                    },
                    {
                        "type":"bible",
                        "text":"2. Timotheus 3, 16",
                        "info":"Die ganze Schrift ist von Gottes Geist gegeben und von ihm erfüllt. Ihr Nutzen ist entsprechend: Sie lehrt uns die Wahrheit zu erkennen, überführt uns von Sünde, bringt uns auf den richtigen Weg und erzieht uns zu einem Leben, wie es Gott gefällt"
                    },
                    {
                        "type":"question",
                        "text":"Gemäß den Bibelstellen oben, warum sollen wir die Bibel lesen?"
                    },
                    {
                        "type":"question",
                        "text":"Was heißt es frei zu sein?"
                    },
                    {
                        "type":"question",
                        "text":"Was ist Wahrheit, wie definierst du Wahrheit?"
                    },
                    {
                        "type":"question",
                        "text":"Wie und Warum macht Wahrheit frei?"
                    }]
                  },
                  {
                    "subtitle":"Gebet",
                    "content":[
                    {
                        "type":"question",
                        "text":"Wie hast du Gebet bisher erlebt?"
                    },
                    {
                        "type":"question",
                        "text":"Wie geht das, wie macht man das und wie oft?"
                    },
                    {
                        "type":"question",
                        "text":"Hast du schon einmal gebetet und warum?"
                    },
                    {
                        "type":"question",
                        "text":"Wie ging es dir dabei?"
                    },
                    {
                        "type":"question",
                        "text":"Wurde schon einmal ein Gebet erhört?"
                    },
                    {
                        "type":"bible",
                        "text":"Matthäus 6,5-8",
                        "info":"Und nun zum Beten. Wenn ihr betet, seid nicht wie die Heuchler, die mit Vorliebe in aller Öffentlichkeit an den Straßenecken und in den Synagogen beten, wo jeder sie sehen kann. Ich versichere euch: Das ist der einzige Lohn, den sie jemals erhalten werden. Wenn du betest, geh an einen Ort, wo du allein bist, schließ die Tür hinter dir und bete in der Stille zu deinem Vater. Dann wird dich dein Vater, der alle Geheimnisse kennt, belohnen. Plappert nicht vor euch hin, wenn ihr betet, wie es die Menschen tun, die Gott nicht kennen. Sie glauben, dass ihre Gebete erhört werden, wenn sie die Worte nur oft genug wiederholen. Seid nicht wie sie, denn euer Vater weiß genau, was ihr braucht, noch bevor ihr ihn darum bittet!"
                    },
                    {
                        "type":"question",
                        "text":"Darf ich vor Gott ehrlich sein?"
                    },
                    {
                        "type":"question",
                        "text":"Was ist eine falsche Motivation fürs Gebet und und was ist das Resultat?"
                    },
                    {
                        "type":"question",
                        "text":"Warum sollen wir uns zum Gebet zurückziehen?"
                    },
                    {
                        "type":"question",
                        "text":"Schließt das das gemeinsame Gebet aus?"
                    },
                    {
                        "type":"question",
                        "text":"Darf ich dir erzählen wie ich Gebet erlebe inklusive ein paar Highlights?"
                    }]
                  }
                ]
            },
        
        
        
        
        
        
        
        
        
                {
                "chapter_name":"Gemeinde",
                "icon":"church.png",
                "content":[ 
                {
                    "subtitle":"Einstieg",
                    "content":[
                    {
                        "type":"question",
                        "text":"Hast du schon verschiedene Gemeinden besucht, was hast du erlebt?"
                    },
                    {
                        "type":"question",
                        "text":"Ist Gott an Worten oder deinem Herz interessiert?"
                    },
                    {
                        "type":"question",
                        "text":"Was verstehst du unter einer christlichen Gemeinde und was ist ihr Zweck?"
                    },
                    {
                        "type":"question",
                        "text":"Findest du, dass Gemeinde nur am Sonntag stattfindet oder stattfinden soll und warum?"
                    },
                    {
                        "type":"bible",
                        "text":"1. Thessalonicher 5, 11",
                        "info":"Macht also einander Mut und helft euch gegenseitig weiter, wie ihr es ja schon tut."
                    },
                    {
                        "type":"bible",
                        "text":"Matthäus 18, 21-22",
                        "info":"Da wandte sich Petrus an Jesus und fragte ihn: »Herr, wie oft muss ich meinem Bruder oder meiner Schwester vergeben, wenn sie mir Unrecht tun? Ist siebenmal genug?« »Nein«, antwortete ihm Jesus. »Nicht nur siebenmal, sondern siebenundsiebzigmal."
                    },
                    {
                        "type":"bible",
                        "text":"Hebräer 10,24",
                        "info":"Und wir wollen aufeinander Acht geben und uns gegenseitig zur Liebe und zu guten Taten anspornen."
                    },
                    {
                        "type":"bible",
                        "text":"1. Korinther 12, 27 - 28",
                        "info":"Ihr alle seid der eine Leib von Christus, und jeder Einzelne von euch gehört als ein Teil dazu. Jedem hat Gott seine ganz bestimmte Aufgabe zugeteilt."
                    },
                    {
                        "type":"question",
                        "text":"Wovon soll das Gemeindeleben geprägt sein?"
                    },
                    {
                        "type":"question",
                        "text":"Wovon sollen die Beziehungen in der Gemeinde geprägt sein?"
                    },
                    {
                        "type":"question",
                        "text":"Wie fändest du es, wenn Gemeinde so gelebt werden würde?"
                    },
                    {
                        "type":"question",
                        "text":"Was denkst du ist das Ziel einer Gemeinde?"
                    },
                    {
                        "type":"question",
                        "text":"Erreichen Gemeinden heutzutage dieses Ziel?"
                    },
                    {
                        "type":"action",
                        "text":"„Eine Gemeinde ist kein Museum für Heilige, sondern ein Krankenhaus für Zerbrochene“"
                    },
                    {
                        "type":"question",
                        "text":"Was hältst du von dieser Aussage?"
                    },
                    {
                        "type":"question",
                        "text":"Was ist damit gemeint?"
                    },
                    {
                        "type":"question",
                        "text":"Was heißt das für jeden Einzelnen in der Gemeinde?"
                    },
                    {
                        "type":"bible",
                        "text":"Matthäus 28, 19 - 20",
                        "info":"Geht nun hin und macht alle Nationen zu Jüngern, und tauft sie auf den Namen des Vaters und des Sohnes und des Heiligen Geistes, und lehrt sie alles zu bewahren, was ich euch geboten habe! Und siehe, ich bin bei euch alle Tage bis zur Vollendung des Zeitalters."
                    }]
                  }
                ]
            },
        
        
        
        
        
        
        
        
        
        
        
        
                {
                "chapter_name":"Lebendiger Glaube",
                "icon":"heart.png",
                "content":[ 
                {
                    "subtitle":"Einstieg",
                    "content":[
                    {
                        "type":"question",
                        "text":"Wie geht es dir nach allem, was wir bisher miteinander geredet haben?"
                    },
                    {
                        "type":"question",
                        "text":"Haben sich Ansichten geändert von dir, welche und warum?"
                    },
                    {
                        "type":"question",
                        "text":"Was hat sich als Vorurteil herausgestellt?"
                    },
                    {
                        "type":"bible",
                        "text":"2. Thessalonicher 2, 13",
                        "info":"Immer wieder danken wir Gott dafür, dass ihr seine Botschaft, die ihr von uns gehört habt, nicht als Menschenwort betrachtet habt; ihr habt sie als das aufgenommen, was sie ja tatsächlich ist, als Gottes Wort. Und nun entfaltet dieses Wort seine Kraft in eurem Leben, weil ihr ihm Glauben geschenkt habt."
                    },
                    {
                        "type":"question",
                        "text":"Was ist der Unterschied zwischen dem, was Menschen sagen und dem Reden Gottes?"
                    },
                    {
                        "type":"question",
                        "text":"Wer sagt dir wer du bist? Welche Gründe gibt es das zu glauben?"
                    },
                    {
                        "type":"question",
                        "text":"Wenn du an deine nahestehendsten Personen denkst (Vater, Mutter, Freund/in…), was sind die Hauptaussagen dieser Menschen über dich als Person, was hörst du sie sagen?"
                    },
                    {
                        "type":"question",
                        "text":"Wie sehr haben dich diese Aussagen in deinem Leben definiert?"
                    },
                    {
                        "type":"question",
                        "text":"n welchen Situationen wirst du an bestimmte Stimmen erinnert?"
                    },
                    {
                        "type":"question",
                        "text":"Was sagt Jesus über dein Leben? <br> Du bist geliebt… <br> Dir ist vergeben… <br> Du bist neu gemacht... <br> Du bist ein Kind Gottes… <br> Du bist ein Bürger des Himmels… <br> Du wirst gebraucht..."
                    },
                    {
                        "type":"question",
                        "text":"Was bedeutet es, deine Identität als Kind Gottes anzunehmen und so zu leben?"
                    }]
                  }
                ]
            }
        ];  
    }
}