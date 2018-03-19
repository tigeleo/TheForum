//
// ===== File face-date.ts    
//
'use strict';

export const DATA_USERS = [
                    {id:1,username:'MisterX',password:'POFMisterX',firstname:'Don',lastname:'Jons',role:'Admin'},
                    {id:2,username:'MisterY',password:'POFMisterY',firstname:'Pepi',lastname:'LongSkirt',role:'User'},
                    {id:3,username:'MisterZ',password:'POFMisterZ',firstname:'Poligraf',lastname:'Poligrafich',role:'User'},
                    {id:4,username:'MisterA',password:'POFMisterA',firstname:'Sharik',lastname:'Mosharik',role:'User'},
                    {id:5,username:'MisterB',password:'POFMisterB',firstname:'Pif',lastname:'Hrif',role:'User'},
                    {id:6,username:'MisterC',password:'POFMisterC',firstname:'Vasia',lastname:'Bublik',role:'User'},
                    {id:7,username:'MisterD',password:'POFMisterD',firstname:'Don',lastname:'Juan',role:'User'},
                    {id:8,username:'MisterE',password:'POFMisterE',firstname:'Tom',lastname:'Henks',role:'User'},
                    {id:9,username:'MisterF',password:'POFMisterF',firstname:'Sandra',lastname:'Bolbok',role:'User'},
                    {id:10,username:'MisterJ',password:'POFMisterJ',firstname:'Alla',lastname:'Pugachurva',role:'User'},
                    {id:11,username:'MisterI',password:'POFMisterI',firstname:'Tania',lastname:'Killer',role:'User'},
                    {id:12,username:'MisterK',password:'POFMisterK',firstname:'Blond',lastname:'InShokolad',role:'User'},
                    {id:13,username:'MisterL',password:'POFMisterL',firstname:'Tonia',lastname:'Spok',role:'User'},
                    {id:14,username:'MisterM',password:'POFMisterM',firstname:'Glaz',lastname:'Udav',role:'User'},
                    {id:15,username:'MisterN',password:'POFMisterN',firstname:'Nos',lastname:'Pendos',role:'User'},
                    {id:16,username:'MisterO',password:'POFMisterO',firstname:'Ruka',lastname:'Litso',role:'User'},
                    {id:17,username:'MisterQ',password:'POFMisterQ',firstname:'Abirvalg',lastname:'Asuleiman',role:'User'},
                    {id:18,username:'MisterP',password:'POFMisterP',firstname:'Zorro',lastname:'Bandoro',role:'User'},
                    {id:19,username:'MisterR',password:'POFMisterR',firstname:'Welish',lastname:'Scotish',role:'User'},
                    {id:20,username:'MisterS',password:'POFMisterS',firstname:'Ilia',lastname:'Muromets',role:'User'},
                    {id:21,username:'MisterT',password:'POFMisterT',firstname:'Alex',lastname:'Popovitch',role:'User'},
                    {id:22,username:'Mister22',password:'POFMisterU',firstname:'Dobi',lastname:'Nikitich',role:'User'},
                    {id:23,username:'Mister23',password:'POFMisterU',firstname:'Mister23',lastname:'Nikitich',role:'User'},
                    {id:24,username:'Mister24',password:'POFMisterU',firstname:'Mister24',lastname:'Nikitich',role:'User'},
                    {id:25,username:'Mister25',password:'POFMisterU',firstname:'Mister25',lastname:'Nikitich',role:'User'},
                    {id:26,username:'Mister26',password:'POFMisterU',firstname:'Mister26',lastname:'Nikitich',role:'User'},
                    {id:27,username:'Mister27',password:'POFMisterU',firstname:'Mister27',lastname:'Nikitich',role:'User'},
                    {id:28,username:'Mister28',password:'POFMisterU',firstname:'Mister28',lastname:'Nikitich',role:'User'},
                    {id:29,username:'Mister29',password:'POFMisterU',firstname:'Mister29',lastname:'Nikitich',role:'User'},
                    {id:30,username:'Mister30',password:'POFMisterU',firstname:'Mister30',lastname:'Nikitich',role:'User'},
                    {id:31,username:'Mister31',password:'POFMisterU',firstname:'Mister31',lastname:'Nikitich',role:'User'},
                    {id:32,username:'Mister32',password:'POFMisterU',firstname:'Mister32',lastname:'Nikitich',role:'User'},
                    {id:33,username:'Mister33',password:'POFMisterU',firstname:'Mister33',lastname:'Nikitich',role:'User'},
                    {id:34,username:'Mister34',password:'POFMisterU',firstname:'Mister34',lastname:'Nikitich',role:'User'},
                    {id:35,username:'Mister35',password:'POFMisterU',firstname:'Mister35',lastname:'Nikitich',role:'User'},
                    {id:36,username:'Mister36',password:'POFMisterU',firstname:'Mister36',lastname:'Nikitich',role:'User'},
                    {id:37,username:'Mister37',password:'POFMisterU',firstname:'Mister37',lastname:'Nikitich',role:'User'},
                    {id:38,username:'Mister38',password:'POFMisterU',firstname:'Mister38',lastname:'Nikitich',role:'User'},
                    {id:39,username:'Mister39',password:'POFMisterU',firstname:'Mister39',lastname:'Nikitich',role:'User'},
                    {id:40,username:'Mister40',password:'POFMisterU',firstname:'Mister40',lastname:'Nikitich',role:'User'},
                    {id:41,username:'Mister41',password:'POFMisterU',firstname:'Mister41',lastname:'Nikitich',role:'User'},
                    {id:42,username:'Mister42',password:'POFMisterU',firstname:'Mister42',lastname:'Nikitich',role:'User'},
                    {id:43,username:'Mister43',password:'POFMisterU',firstname:'Mister43',lastname:'Nikitich',role:'User'},
                    {id:44,username:'Mister44',password:'POFMisterU',firstname:'Mister44',lastname:'Nikitich',role:'User'},
                    {id:45,username:'Mister45',password:'POFMisterU',firstname:'Mister45',lastname:'Nikitich',role:'User'},
                    {id:46,username:'Mister46',password:'POFMisterU',firstname:'Mister46',lastname:'Nikitich',role:'User'},
                    {id:47,username:'Mister47',password:'POFMisterU',firstname:'Mister47',lastname:'Nikitich',role:'User'},
                    {id:48,username:'Mister48',password:'POFMisterU',firstname:'Mister48',lastname:'Nikitich',role:'User'},
                    {id:49,username:'Mister49',password:'POFMisterU',firstname:'Mister49',lastname:'Nikitich',role:'User'},
                    {id:50,username:'Mister50',password:'POFMisterU',firstname:'Mister50',lastname:'Nikitich',role:'User'},
                    {id:51,username:'Mister51',password:'POFMisterU',firstname:'Mister51',lastname:'Nikitich',role:'User'},
                    {id:52,username:'Mister52',password:'POFMisterU',firstname:'Mister52',lastname:'Nikitich',role:'User'},
                    {id:53,username:'Mister53',password:'POFMisterU',firstname:'Mister53',lastname:'Nikitich',role:'User'},
                    {id:54,username:'Mister54',password:'POFMisterU',firstname:'Mister54',lastname:'Nikitich',role:'User'},
                    {id:55,username:'Mister55',password:'POFMisterU',firstname:'Mister55',lastname:'Nikitich',role:'User'},
                    {id:56,username:'Mister56',password:'POFMisterU',firstname:'Mister56',lastname:'Nikitich',role:'User'},

                ];

export const DATA_THEAMS=[
                    {id:1,title:'History', text:'All about history paradox, problems and teories',img:'https://static.wixstatic.com/media/7fac56_a6d55b15e6ae45ebb6ff9994301be14d~mv2.jpg/v1/fill/w_253,h_253,al_c,q_80,usm_0.66_1.00_0.01/7fac56_a6d55b15e6ae45ebb6ff9994301be14d~mv2.jpg'},
                    {id:2,title:'Economy', text:'All about money, economy and teories of ecomony',img:'https://static.wixstatic.com/media/7fac56_a04b5348376a42c487c1d48b3bb28154~mv2_d_1300_1390_s_2.jpg/v1/fill/w_253,h_270,al_c,q_80,usm_0.66_1.00_0.01/7fac56_a04b5348376a42c487c1d48b3bb28154~mv2_d_1300_1390_s_2.jpg'},
                    {id:3,title:'Sciences', text:'All about Natural Sciences',img:'https://static.wixstatic.com/media/7fac56_92948d00232043638a31fe646ea03fca~mv2.jpg/v1/fill/w_253,h_262,al_c,q_80,usm_0.66_1.00_0.01/7fac56_92948d00232043638a31fe646ea03fca~mv2.jpg'},
                    {id:4,title:'Literature', text:'All Literature',img:'https://static.wixstatic.com/media/7fac56_3da6b6d171484c0abc272038e4525788~mv2.jpg/v1/fill/w_253,h_223,al_c,q_80,usm_0.66_1.00_0.01/7fac56_3da6b6d171484c0abc272038e4525788~mv2.jpg'},
                    {id:5,title:'Religion', text:'All about theology',img:'https://static.wixstatic.com/media/7fac56_5506bb313dd3441288fc8cf04fa279e3~mv2.jpg/v1/fill/w_253,h_242,al_c,q_80,usm_0.66_1.00_0.01/7fac56_5506bb313dd3441288fc8cf04fa279e3~mv2.jpg'},
                    {id:6,title:'Theater', text:'Cinema, theater',img:'https://static.wixstatic.com/media/7fac56_03b921cc22514c69b9e24087750ccef0~mv2.jpg/v1/fill/w_253,h_253,al_c,q_80,usm_0.66_1.00_0.01/7fac56_03b921cc22514c69b9e24087750ccef0~mv2.jpg'},
                    {id:7,title:'Mistic', text:'Strange things happen',img:'https://static.wixstatic.com/media/7fac56_8c02e6e081cc47a98e54e7454b46cde6~mv2_d_2000_1923_s_2.png/v1/fill/w_253,h_243,al_c,q_80,usm_0.66_1.00_0.01/7fac56_8c02e6e081cc47a98e54e7454b46cde6~mv2_d_2000_1923_s_2.png'},
                    {id:8,title:'Human', text:'All theories about human ',img:'https://static.wixstatic.com/media/7fac56_38810578e8a546ab9ea6b55a75122743~mv2.jpg/v1/fill/w_253,h_253,al_c,q_80,usm_0.66_1.00_0.01/7fac56_38810578e8a546ab9ea6b55a75122743~mv2.jpg'}
                ];

export const DATA_DISCUTIONS={
                    discussions:[
                    {   theamid:1,
                        theams:[
                        {"id":1,"title":"Welcome to My Activity",     "body": "Find and see your search history, browsing history, and other activity that's saved to your Google Account in My Activity. You're in control of this data and can easily delete activity from your account.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":2,"title":"History - Wikipedia",     "body": "History is the study of the past as it is described in written documents. Events occurring before written record are considered prehistory. It is an umbrella term that relates to past events as well as the memory, discovery, collection, organization, presentation, and interpretation of information about these events.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":3,"title":"The Paradox of Our Time In History - The Complete Version!",     "body": "The paradox of our time in history is that we have taller buildings, but shorter tempers; wider freeways, but narrower viewpoints; we spend more, but have less; we buy more, but enjoy it less. We have bigger houses and smaller families; more conveniences, but less time; we have more degrees", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":4,"title":"Project MUSE - The Historians' Paradox",     "body": "In an age of cable television pundits and anonymous bloggers dueling over history, the value of owning history increases at the same time as our confidence in history as a way of knowing crumbles. Historical knowledge thus presents a paradox — the more it is required.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":5,"title":"Peter Charles Hoffer. The Historians' Paradox: The Study of History in",     "body": "Peter Charles Hoffer. The Historians' Paradox: The Study of History in", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":6,"title":"Mysterious Void Discovered in Egypt's Great Pyramid",     "body": "Egypt’s Great Pyramid of Giza—one of the wonders of the ancient world, and a dazzling feat of architectural genius—contains a hidden void at least a hundred feet long, scientists announced on Thursday.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":7,"title":"10 Historical Events That Were Much Shorter Than You Thought",     "body": "0 Historical Events That Were Much Shorter Than You Thought. Morris M. August 20, ... was short-lived. According to the Smithsonian, the golden age of Caribbean piracy we see in movies lasted no more than seven years. .... 2The Spanish-American War Was Even Shorter Than You Think. 09. Photo via", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        
                    ]},
                    {   theamid:2,
                        theams:[
                        {"id":8,"title":"US Economy: Facts, Definitions, Influences - The Balance",     "body": "Fast Facts. Gross Domestic Product: $19.739 trillion (Annualized rate for October through December 2017) GDP Growth Rate: 2.5 percent (Annualized rate for October through December 2017) GDP per Capita: $57,300 (2016) Gross National Income: $18.138 trillion PPP dollars (2015) World Bank.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":9,"title":"100 Facts About The Economy That Will Blow Your Mind: The Motley.",     "body": "00 Facts About The Economy That Will Blow Your Mind: The Motley Fool. Morgan Housel The Motley Fool. 1.9k. 610. The Motley Fool In no particular order... 1. As of January 2013, there are 16 people left in the world who were born in the 1800s, according to the Gerontology Research Group.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":10,"title":"20 Surprising Facts About the U.S. Economy | Fox Business",     "body": "Fact. Back in 1970, the total amount of debt in the United States (government debt + business debt + consumer debt, etc.) was less than $2 trillion.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":11,"title":"Spain Economy: Facts, Population, Unemployment, GDP, Business",     "body": "Learn about Spain's economy in the Index of Economic Freedom. The report includes data on Spain's population, unemployment, GDP, business and more.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":12,"title":"German Economy: Facts, Population, GDP, Inflation, Unemployment ",     "body": "German Economy: Facts, Population, GDP, Inflation, Unemployment, Business.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":13,"title":"ECONOMY - Israel Ministry of Foreign Affairs",     "body": "After having enjoyed for many years one of the fastest GDP growth rates among world economies, Israel continued the economic recovery it began in 2003, after a two-year distinct slowdown in almost all economic activities. This trend continued in 2007, according to all economic parameters. In the years 2006-2007, Israel's .", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":14,"title":"10 Essential Economic Truths Liberals Need to Learn - Forbes",     "body": " Here are the most important economic lessons for them to learn. ... With that in mind, here are ten economic facts that liberals need to learn. ... The basic identity is that national income equals consumer spending plus investment plus government spending on goods and services plus net exports. To make .", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        
                    ]},
                    {   theamid:3,
                        theams:[
                        {"id":15,"title":"Olbers’ Paradox",     "body": "Olbers’ paradox deals with cosmology and is a simple observation of our universe that you can make tonight. If the universe is infinitely old and contains an infinite number of stars, then why isn’t the sky infinitely bright? The answer was actually proposed by horror writer Edgar Allan Poe almost a century before the birth of modern cosmology. The very fact that we’re not blinded by infinite brightness in every direction is because the universe has a finite age with a finite number of stars in it.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":16,"title":"The Monty Hall Problem",     "body": "A classic in statistics based on the popular game-show host of the same name. Your chances of winning actually increase if you change your door choice after the first round. The reason is that you are changing your sample space from 1-out-of-3 to 1-out-of-2. While it seems that your odds should be 50%, they’re actually 66% in your favor with this strategy. (Try it, it works!) Hall himself talked about the puzzle in a 1991 interview, noting that his interplay with each contestant on Let’s Make A Deal canceled out the statistical effect of the situation.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":17,"title":"The Faint Sun Paradox",     "body": "Current models of stellar evolution suggest that the Sun had to be much fainter early in Earth’s history … so how did we avoid an “Ice Ball Earth?” The climate puzzle of the early Earth has yet to be completely solved, but there are some interesting hypotheses. One idea is the volcanic greenhouse gasses were much more prevalent in the atmosphere of the early Earth. Another proposal is that the Sun was slightly more massive and energetic in its early history than proposed. Looking at Mars, we know that it once enjoyed the same warmth as well and was able to have flowing water on its surface, despite its distance from the Sun.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":18,"title":"Zeno’s Dichotomy Paradox",     "body": "This is an idea from the Greek philosopher Zeno that says if an infinite number of points exist from point A to B, you can never reach point B traveling half the distance at a time. Although more of a logic-based conundrum, Zeno’s dichotomy paradox anticipated the subatomic world of quantum particles. Zeno also proposed many other notable paradoxes, including the Arrow paradox, which maintains that an arrow in flight occupies a single volume of space at any given time, and is therefore motionless.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":19,"title":"The Tea Leaf Paradox",     "body": "Why do tea leaves gather in the center of the cup as its stirred? While one would think centrifugal force would force the tea leaves towards the edge of the cup, more is at play just below the surface of the fluid. Specifically, the vertical rotation of the fluid is faster at the top than the bottom, setting up an inward pressure gradient. Albert Einstein first proposed the correct solution for this in 1926.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":20,"title":"Schrödinger’s Cat",     "body": "From quantum physics, this thought experiment explains that at a sub-atomic level, state is determined by observation. Schrödinger’s Cat asks us to think of a vial of poison gas in a box with said cat. Rupturing of the vial depends on the decay of a radioactive particle, the state of which cannot be known without observation. Thus, the cat actually occupies two states (alive and dead) until the observation is made. While arcane, there is observational evidence that the world of subatomic particles actually behave in this manner.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":21,"title":"The Duality of Light",     "body": "How can light behave both as a particle and a wave? Again, although this contradicts common sense, there is real evidence that light does just that. For example, the photoelectric effect is firm evidence of light photons acting as particles (This is how solar panels work). However, the double-slit experiment demonstrates the interference and scattering pattern of light, a very wave-like thing to do.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":22,"title":"The Twin Paradox of Relativity",     "body": "What happens to time as you approach the speed of light? Rather than being separate, we know that time and space is actually linked. The closer you approach the speed of light, the slower time appears to flow from your own frame of reference. This sort of effect has actually been measured using satellites and ultra-precise clocks. While a theoretical journey around the galaxy at 99.9% the speed of light might only take a few years from your own perspective, you would return to Earth to find that your family and friends had been deceased for hundreds of thousands of years.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":23,"title":"Maxwell’s Demon",     "body": "This paradox with the strange name shows that while the 2nd Law of Thermodynamics is a statistical certainty, temporary violations can exist. Maxwell’s Demon envisions a valve between two chambers allowing faster moving molecules to pass from one to the other, seemingly in violation of the 2nd Law. Note however, that the net entropy decrease is only temporary; for a true violation to occur, slower moving molecules would have to be allowed back across the barrier in the reverse direction as well. Systems (such as living organisms) can do battle with the 2nd Law for a time, but in the end, entropy always wins. By the way, the name Maxwell’s Demon comes from 19th century Scottish theoretical physicist James Clerk Maxwell.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":24,"title":"The French Paradox",     "body": "Why do the French drink, smoke and overeat but remain relativity healthy? Medical researchers have puzzled over the French paradox for years. Many have cited the presence of resveratrol in red wine as a preventative for cancer and heart disease. Others indicate that the high level of vitamin K2 (menaquinone) prevents hardening of the arteries. Or perhaps the paradox is no more complex than lifestyle. Many European cultures still walk and bicycle daily, a habit almost unknown to many Americans.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        
                    ]},
                    {   theamid:4,
                        theams:[
                        {"id":25,"title":"The Door. By Magda Szabo. Translated by Len Rix.",     "body": "In Szabo’s haunting novel, a writer’s intense relationship with her servant — an older woman who veers from aloof indifference to inexplicable generosity to fervent, implacable rage — teaches her more about people and the world than her long days spent alone, in front of her typewriter. Szabo, who died in 2007, first published her novel in 1987, in the last years of Communist rule; this supple translation shows how a story about two women in 20th-century Hungary can resonate in a very different time and place. With a mix of dark humor and an almost uncanny sense of the absurd, she traces the treacherous course of a country’s history, and the tragic course of a life." },
                        {"id":26,"title":"A Manual for Cleaning Women: Selected Stories. By Lucia Berlin. Edited by Stephen Emerson.",     "body": "Berlin, who died in 2004, left behind a substantial but ­little-known trove of stories that in her lifetime appeared mostly in literary journals and small-press books. This revelatory collection gathers 43 of them, introducing her to a wider audience as an uncompromising and largehearted observer of life whose sympathies favor smart, mouthy women struggling to get by much as Berlin herself — an alcoholic who raised four sons on her own — frequently did. With their maximalist emotions and sparse, unadorned language, Berlin’s stories are the kind a woman in a Tom Waits song might tell a man she’s just met during a long humid night spent drinking in a parking lot. " },
                        {"id":27,"title":"Outline.By Rachel Cusk",     "body": "Cusk’s subtle, unconventional and lethally intelligent novel, “Outline,” her eighth, is a string of one-sided conversations. A divorced woman traveling in Greece, our narrator, talks — or rather listens — to the people she meets, absorbing their stories of love and loss, deception, pride and folly. Well-worn subjects — adultery, divorce, ennui — become freshly menacing under Cusk’s gaze, and her mental clarity can seem so penetrating, a reader might fear the same risk of invasion and exposure." },
                        {"id":28,"title":"The Sellout.By Paul Beatty",     "body": "This year’s most cheerfully outrageous satire takes as its subject a young black man’s desire to segregate his local school and to reinstate slavery in his home — before careening off to consider almost 400 years of black survival in America, puncturing every available piety. Sharp-minded and fabulously profane, Beatty’s novel is a fearless, metaphorical multicultural pot almost too hot to touch." },
                        {"id":29,"title":"The Story of the Lost Child: Book 4, The Neapolitan Novels: “Maturity, Old Age” By Elena Ferrante. Translated by Ann Goldstein.",     "body": "Like the three books that precede it in Ferrante’s Neapolitan quartet, this brilliant conclusion offers a clamorous, headlong exploration of female friendship set against a backdrop of poverty, ambition, violence and political struggle. As Elena and Lila, the girlhood rivals whose relationship spans the series, enter the middle terrain of marriage and motherhood, Ferrante’s preoccupations remain with the inherent radicalism of modern female identity — especially, and strikingly, with the struggles of the female artist against her biological and social destiny." },
                        {"id":30,"title":"Between the World and Me.By Ta-Nehisi Coates",     "body": "Forget, for a moment, the ubiquitous comparisons to James Baldwin: Though fitting in many ways, they can distract us from how original Coates’s book truly is. Structured as a letter to his teenage son, this slender, urgent volume — a searching exploration of what it is to grow up black in a country built on slave labor and “the destruction of black bodies” — rejects fanciful abstractions in favor of the irreducible and particular. Coates writes to his son with a cleareyed realism about the beautiful and terrible struggle that inheres in flesh and bone." },
                        {"id":31,"title":"Empire of Cotton: A Global History.By Sven Beckert",     "body": "If sugar was the defining commodity of the 18th century and oil of the 20th, then surely cotton was king in the 19th century. In this sweeping, ambitious and disturbing survey, Beckert takes us through every phase of a global industry that has relied on millions of miserably treated slaves, sharecroppers and millworkers to turn out its product. The industrialization of cotton rested on violence, Beckert tells us, and its story is that of the development of the modern world itself. Even today, he reports, an industry that is always looking for cheaper labor is engaged in a “giant race to the bottom.”" },
                        
                    ]},
                    {   theamid:5,
                        theams:[
                        {"id":32,"title":"How long we may to live.",     "body": "How teach english sincers we may live very long if leaning control yourself", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":33,"title":"Script terminated by timeout - DNN Software.",     "body": "Sep 30, 2015 - DNN 7.4.1 limited number of modules on page or Error: Script terminated by timeout Hello all, on our index page are currently around 46 modules …", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":34,"title":"PHP: Connection handling - Manual.",     "body": "Your script can also be terminated by the built-in script timer. The default timeout is 30 seconds. It can be changed using the max_execution_time php.ini directive or the corresponding php_value max_execution_time Apache httpd.conf directive as well as with the set_time_limit() function. When the timer expires the script ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":35,"title":"How to troubleshoot error messages - Wowza",     "body": "Jun 23, 2017 - See a list of common error messages and steps on how to troubleshoot for Wowza media server software. ... Cause: When using the Load Test Tool, it's expected behavior that you'll see 2 Server license errors each time the performance script is run. ..... Cause: No stream connection within timeout value.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":36,"title":"JavaScript Tutorial: The Basics - NTU",     "body": "You are free to embed as many scripts into a single document as you like, using multiple <script>...</script> element. Lines 7-9 and Line 13-17 are two pieces of JavaScripts, placed in the HEAD and BODY sections, respectively. JavaScript statements are terminated by a semicolon ';' . The alert(aString) function (Line 8) ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":37,"title":"17.5. subprocess — Subprocess management — Python 3.6.4 ...",     "body": "If the timeout expires, the child process will be killed and waited for. The TimeoutExpired exception will be re-raised after the child process has terminated. The input argument is passed to Popen.communicate() and thus to the subprocess's stdin. If used it must be a byte sequence, or a string if encoding or errors is specified ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":38,"title":"sqlcmd Utility | Microsoft Docs",     "body": "Jul 27, 2017 - The sqlcmd utility lets you enter Transact-SQL statements, system procedures, and script files at the command prompt, in Query Editor in SQLCMD mode, in a ... sqlcmd -a packet_size -A (dedicated administrator connection) -b (terminate batch job if there is an error) -c batch_terminator -C (trust the server ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        
                    ]},
                    {   theamid:6,
                        theams:[
                        {"id":39,"title":"How long we may to live.",     "body": "How teach english sincers we may live very long if leaning control yourself", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":40,"title":"Script terminated by timeout - DNN Software.",     "body": "Sep 30, 2015 - DNN 7.4.1 limited number of modules on page or Error: Script terminated by timeout Hello all, on our index page are currently around 46 modules …" },
                        {"id":41,"title":"PHP: Connection handling - Manual.",     "body": "Your script can also be terminated by the built-in script timer. The default timeout is 30 seconds. It can be changed using the max_execution_time php.ini directive or the corresponding php_value max_execution_time Apache httpd.conf directive as well as with the set_time_limit() function. When the timer expires the script ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":42,"title":"How to troubleshoot error messages - Wowza",     "body": "Jun 23, 2017 - See a list of common error messages and steps on how to troubleshoot for Wowza media server software. ... Cause: When using the Load Test Tool, it's expected behavior that you'll see 2 Server license errors each time the performance script is run. ..... Cause: No stream connection within timeout value.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":43,"title":"JavaScript Tutorial: The Basics - NTU",     "body": "You are free to embed as many scripts into a single document as you like, using multiple <script>...</script> element. Lines 7-9 and Line 13-17 are two pieces of JavaScripts, placed in the HEAD and BODY sections, respectively. JavaScript statements are terminated by a semicolon ';' . The alert(aString) function (Line 8) ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":44,"title":"17.5. subprocess — Subprocess management — Python 3.6.4 ...",     "body": "If the timeout expires, the child process will be killed and waited for. The TimeoutExpired exception will be re-raised after the child process has terminated. The input argument is passed to Popen.communicate() and thus to the subprocess's stdin. If used it must be a byte sequence, or a string if encoding or errors is specified ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":45,"title":"sqlcmd Utility | Microsoft Docs",     "body": "Jul 27, 2017 - The sqlcmd utility lets you enter Transact-SQL statements, system procedures, and script files at the command prompt, in Query Editor in SQLCMD mode, in a ... sqlcmd -a packet_size -A (dedicated administrator connection) -b (terminate batch job if there is an error) -c batch_terminator -C (trust the server ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        
                    ]},
                    {   theamid:7,
                        theams:[
                        {"id":46,"title":"How long we may to live.",     "body": "How teach english sincers we may live very long if leaning control yourself", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":47,"title":"Script terminated by timeout - DNN Software.",     "body": "Sep 30, 2015 - DNN 7.4.1 limited number of modules on page or Error: Script terminated by timeout Hello all, on our index page are currently around 46 modules …", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":48,"title":"PHP: Connection handling - Manual.",     "body": "Your script can also be terminated by the built-in script timer. The default timeout is 30 seconds. It can be changed using the max_execution_time php.ini directive or the corresponding php_value max_execution_time Apache httpd.conf directive as well as with the set_time_limit() function. When the timer expires the script ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":49,"title":"How to troubleshoot error messages - Wowza",     "body": "Jun 23, 2017 - See a list of common error messages and steps on how to troubleshoot for Wowza media server software. ... Cause: When using the Load Test Tool, it's expected behavior that you'll see 2 Server license errors each time the performance script is run. ..... Cause: No stream connection within timeout value.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":50,"title":"JavaScript Tutorial: The Basics - NTU",     "body": "You are free to embed as many scripts into a single document as you like, using multiple <script>...</script> element. Lines 7-9 and Line 13-17 are two pieces of JavaScripts, placed in the HEAD and BODY sections, respectively. JavaScript statements are terminated by a semicolon ';' . The alert(aString) function (Line 8) ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":51,"title":"17.5. subprocess — Subprocess management — Python 3.6.4 ...",     "body": "If the timeout expires, the child process will be killed and waited for. The TimeoutExpired exception will be re-raised after the child process has terminated. The input argument is passed to Popen.communicate() and thus to the subprocess's stdin. If used it must be a byte sequence, or a string if encoding or errors is specified ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        {"id":52,"title":"sqlcmd Utility | Microsoft Docs",     "body": "Jul 27, 2017 - The sqlcmd utility lets you enter Transact-SQL statements, system procedures, and script files at the command prompt, in Query Editor in SQLCMD mode, in a ... sqlcmd -a packet_size -A (dedicated administrator connection) -b (terminate batch job if there is an error) -c batch_terminator -C (trust the server ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        
                    ]},
                    {   theamid:8,
                        theams:[
//                        {"id":53,"title":"How long we may to live.",     "body": "How teach english sincers we may live very long if leaning control yourself", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
//                        {"id":54,"title":"Script terminated by timeout - DNN Software.",     "body": "Sep 30, 2015 - DNN 7.4.1 limited number of modules on page or Error: Script terminated by timeout Hello all, on our index page are currently around 46 modules …", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
//                        {"id":55,"title":"PHP: Connection handling - Manual.",     "body": "Your script can also be terminated by the built-in script timer. The default timeout is 30 seconds. It can be changed using the max_execution_time php.ini directive or the corresponding php_value max_execution_time Apache httpd.conf directive as well as with the set_time_limit() function. When the timer expires the script ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
//                        {"id":56,"title":"How to troubleshoot error messages - Wowza",     "body": "Jun 23, 2017 - See a list of common error messages and steps on how to troubleshoot for Wowza media server software. ... Cause: When using the Load Test Tool, it's expected behavior that you'll see 2 Server license errors each time the performance script is run. ..... Cause: No stream connection within timeout value.", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
//                        {"id":57,"title":"JavaScript Tutorial: The Basics - NTU",     "body": "You are free to embed as many scripts into a single document as you like, using multiple <script>...</script> element. Lines 7-9 and Line 13-17 are two pieces of JavaScripts, placed in the HEAD and BODY sections, respectively. JavaScript statements are terminated by a semicolon ';' . The alert(aString) function (Line 8) ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
//                        {"id":58,"title":"17.5. subprocess — Subprocess management — Python 3.6.4 ...",     "body": "If the timeout expires, the child process will be killed and waited for. The TimeoutExpired exception will be re-raised after the child process has terminated. The input argument is passed to Popen.communicate() and thus to the subprocess's stdin. If used it must be a byte sequence, or a string if encoding or errors is specified ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
//                        {"id":59,"title":"sqlcmd Utility | Microsoft Docs",     "body": "Jul 27, 2017 - The sqlcmd utility lets you enter Transact-SQL statements, system procedures, and script files at the command prompt, in Query Editor in SQLCMD mode, in a ... sqlcmd -a packet_size -A (dedicated administrator connection) -b (terminate batch job if there is an error) -c batch_terminator -C (trust the server ...", author:"MisterX", author_role:"User", watchers:1,comments:3,created:"11/12/2017 10:12" },
                        
                    ]}
                        ],
                        
                };

export const DATA_COMMENCTS={commentslist:
                    [{discussionid:1,
                    comments:[
                        {"id":1,"author":"MisterX",     "body": "I fine" },
                        {"id":2,"author":"MisterY",     "body": "I fine" },
                        {"id":3,"author":"MisterY",     "body": "I fine" },
                        {"id":4,"author":"MisterY",     "body": "I fine" },
                        {"id":5,"author":"MisterY",     "body": "I fine" },
                        {"id":6,"author":"MisterY",     "body": "I fine" },
                        {"id":7,"author":"MisterY",     "body": "I fine" },
                         
                    ]},
                    {discussionid:2,
                    comments:[
                        {"id":8,"author":"MisterZ",     "body": "I fine" },
                        {"id":9,"author":"MisterY",     "body": "I fine" },
                        {"id":10,"author":"MisterZ",     "body": "I fine" },
                        {"id":11,"author":"MisterY",     "body": "I fine" },
                        {"id":12,"author":"MisterZ",     "body": "I fine" },
                        {"id":13,"author":"MisterY",     "body": "I fine" },
                        {"id":14,"author":"MisterZ",     "body": "I fine" },
                         
                    ]}  ,
                   {discussionid:3,
                    comments:[
                        {"id":15,"author":"MisterZ",     "body": "I fine" },
                        {"id":16,"author":"MisterY",     "body": "I fine" },
                        {"id":17,"author":"MisterZ",     "body": "I fine" },
                        {"id":18,"author":"MisterY",     "body": "I fine" },
                        {"id":19,"author":"MisterZ",     "body": "I fine" },
                        {"id":20,"author":"MisterY",     "body": "I fine" },
                        {"id":21,"author":"MisterZ",     "body": "I fine" },
                         
                    ]},
                   {discussionid:4,
                    comments:[
                        {"id":22,"author":"MisterZ",     "body": "I fine" },
                        {"id":23,"author":"MisterY",     "body": "I fine" },
                        {"id":24,"author":"MisterZ",     "body": "I fine" },
                        {"id":25,"author":"MisterY",     "body": "I fine" },
                        {"id":26,"author":"MisterZ",     "body": "I fine" },
                        {"id":27,"author":"MisterY",     "body": "I fine" },
                        {"id":28,"author":"MisterZ",     "body": "I fine" },
                         
                    ]}   ,
                   {discussionid:5,
                    comments:[
                        {"id":29,"author":"MisterZ",     "body": "I fine" },
                        {"id":30,"author":"MisterY",     "body": "I fine" },
                        {"id":31,"author":"MisterZ",     "body": "I fine" },
                        {"id":32,"author":"MisterY",     "body": "I fine" },
                        {"id":33,"author":"MisterZ",     "body": "I fine" },
                        {"id":34,"author":"MisterY",     "body": "I fine" },
                        {"id":35,"author":"MisterZ",     "body": "I fine" },
                         
                    ]}   ,
                   {discussionid:6,
                    comments:[
                        {"id":36,"author":"MisterZ",     "body": "I fine" },
                        {"id":37,"author":"MisterY",     "body": "I fine" },
                        {"id":38,"author":"MisterZ",     "body": "I fine" },
                        {"id":39,"author":"MisterY",     "body": "I fine" },
                        {"id":40,"author":"MisterZ",     "body": "I fine" },
                        {"id":41,"author":"MisterY",     "body": "I fine" },
                        {"id":42,"author":"MisterZ",     "body": "I fine" },
                         
                    ]}   ,
                   {discussionid:7,
                    comments:[
                        {"id":43,"author":"MisterZ",     "body": "I fine" },
                        {"id":44,"author":"MisterY",     "body": "I fine" },
                        {"id":45,"author":"MisterZ",     "body": "I fine" },
                        {"id":46,"author":"MisterY",     "body": "I fine" },
                        {"id":47,"author":"MisterZ",     "body": "I fine" },
                        {"id":48,"author":"MisterY",     "body": "I fine" },
                        {"id":49,"author":"MisterZ",     "body": "I fine" },
                         
                    ]}   ,
                   {discussionid:8,
                    comments:[                       
                    ]}                     
                
                    ]
                        
                };


