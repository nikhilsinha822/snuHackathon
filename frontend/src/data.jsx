const Data = [
    "Poultry cuts & offal, except livers, fresh or chilled",
    "Swine meat, salted/dried/smoked not ham/shoulder/bell",
    "Fowls, domestic, whole, frozen",
    "Meat and edible offal nes fresh, chilled or frozen",
    "Swine edible offal, fresh or chilled",
    "Poultry, domestic, whole, fresh or chilled",
    "Bovine cuts boneless, frozen",
    "Bovine edible offal, fresh or chilled",
    "Bovine edible offal, frozen except livers and tongues",
    "Swine edible offal, frozen except livers",
    "Meat and edible meat offal cured, flours, meals nes",
    "Swine carcasses and half carcasses, fresh or chilled",
    "Bovine cuts boneless, fresh or chilled",
    "Turkey cuts & offal, except livers, frozen",
    "Bovine cuts bone in, frozen",
    "Swine cuts, frozen nes",
    "Frog legs, fresh, chilled or frozen",
    "Lamb carcasses and half carcasses, frozen",
    "Bovine meat salted, dried or smoked",
    "Bovine carcasses and half carcasses, fresh or chilled",
    "Bovine cuts bone in, fresh or chilled",
    "Sheep cuts, bone in, fresh or chilled",
    "Lamb carcasses and half carcasses, fresh or chilled",
    "Swine cuts, fresh or chilled, nes",
    "Hams and shoulders, swine, salted, dried or smoked",
    "Goat meat, fresh, chilled or frozen",
    "Horse, ass, mule, hinny meat, fresh, chilled or froze",
    "Bovine livers, frozen",
    "Bovine tongues, frozen",
    "Sheep, goat, ass, mule, hinnie edible offal, frozen",
    "Sheep, goat, ass, mule, hinnie offal, fresh or chille",
    "Ducks, geese and guinea fowls, domestic, whole, froze",
    "Hams, shoulders and cuts, of swine, bone in, frozen",
    "Fowl cuts & offal, domestic, except livers, frozen",
    "Bellies (streaky) of swine, salted, dried or smoked",
    "Sheep cuts, bone in, frozen",
    "Sheep cuts, boneless, frozen",
    "Turkeys, domestic, whole, frozen",
    "Duck, goose, guinea fowl cuts, offal not liver, froze",
    "Pig and poultry fat, unrendered",
    "Sheep cuts, boneless, fresh or chilled",
    "Swine livers, frozen",
    "Bovine carcasses and half carcasses, frozen",
    "Sheep carcasses and half carcasses, fresh or chilled",
    "Swine carcasses and half carcasses, frozen",
    "Sheep carcasses and half carcasses, frozen",
    "Swine hams, shoulders & cuts bone in, fresh or chille",
    "Rabbit or hare meat, offal, fresh, chilled or frozen",
    "Fatty livers (geese,ducks) domestic fresh or chilled",
    "Poultry livers, domestic, frozen",
    "Salmon fresh or chilled, whole",
    "Salmon Atlantic or Danube, frozen, whole",
    "Crustaceans nes, not frozen",
    "Fish live, except trout, eel or carp",
    "Trout, fresh or chilled, whole",
    "Salmonidae, not trout or salmon,fresh or chilled whol",
    "Flatfish, fresh/chilled not halibut/plaice/sole, whol",
    "Cod, fresh or chilled, whole",
    "Sardines,brisling,sprats, fresh or chilled, whole",
    "Sardines,brisling,sprats, frozen, whole",
    "Dogfish and other sharks, frozen, whole",
    "Fish fillet or meat, fresh or chilled, not liver, roe",
    "Shrimps and prawns, frozen",
    "Shrimps and prawns, not frozen",
    "Tuna nes, fresh or chilled, whole",
    "Haddock, fresh or chilled, whole",
    "Plaice, frozen, whole",
    "Sea bass, frozen, whole",
    "Cuttle fish, squid, live, fresh or chilled",
    "Octopus, frozen, dried, salted or in brine",
    "Cod, frozen, whole",
    "Mackerel, frozen, whole",
    "Hake, frozen, whole",
    "Fish meat & mince, except liver, roe & fillets, froze",
    "Salmon, Pacific, frozen, whole",
    "Flatfish except halibut, plaice or sole, frozen, whol",
    "Crustaceans nes, frozen,",
    "Oysters",
    "Octopus, live, fresh or chilled",
    "Ornamental fish, live",
    "Eels, live",
    "Eels, frozen, whole",
    "Snails, edible (except sea snails)",
    "Aquatic invertebrates nes, fresh or chilled, live",
    "Fish nes, frozen, whole",
    "Trout, live",
    "Plaice, fresh or chilled, whole",
    "Eels, fresh or chilled, whole",
    "Fish nes, salted or in brine, not dried or smoked",
    "Crabs, not frozen",
    "Trout, frozen, whole",
    "Fish fillets, dried, salted or in brine, not smoked",
    "Fish livers and roes, frozen",
    "Cuttle fish, squid, frozen, dried, salted or in brine",
    "Dogfish and other sharks, fresh or chilled, whole",
    "Tunas nes, frozen, whole",
    "Herrings, frozen, whole",
    "Fish fillets, frozen",
    "Rock lobster and other sea crawfish, frozen",
    "Crabs, frozen",
    "Rock lobster and other sea crawfish not frozen",
    "Lobsters (Homarus), not frozen",
    "Scallops other than live, fresh or chilled",
    "Aquatic invertebrates nes, frozen or preserved",
    "Scallops, live, fresh or chilled",
    "Tuna(yellowfin) fresh or chilled, whole",
    "Skipjack,stripe-belly bonito, fresh or chilled, whole",
    "Coalfish, fresh or chilled, whole",
    "Salmonidae, nes,frozen, whole",
    "Mussels, frozen, dried, salted or in brine",
    "Carp, live",
    "Fish nes, fresh or chilled, whole",
    "Anchovies, salted or in brine, not dried or smoked",
    "Lobsters (Homarus) frozen",
    "Sole, fresh or chilled, whole",
    "Fish livers and roes, fresh or chilled",
    "Mussels, shelled or not, live, fresh or chilled",
    "Halibut, fresh or chilled, whole",
    "Tunas(yellowfin) frozen, whole",
    "Livers and roes, dried, smoked, salted or in brine",
    "Tuna(albacore,longfin) fresh or chilled, whole",
    "Sole, frozen, whole",
    "Smoked fish & fillets other than herrings or salmon",
    "Dried fish, other than cod, not smoked",
    "Cod dried, whether or not salted but not smoked",
    "Flours, meals & pellets of fish for human consumption",
    "Mackerel, fresh or chilled, whole",
    "Herrings, salted or in brine, not dried or smoked",
    "Cod, salted or in brine, not dried or smoked",
    "Herring, fresh or chilled, whole",
    "Salmon, smoked, including fillets",
    "Herrings, smoked, including fillets",
    "Tunas(albacore,longfin), frozen, whole",
    "Skipjack,stripe-bellied bonito, frozen, whole",
    "Coalfish, frozen, whole",
    "Haddock, frozen, whole",
    "Halibut, frozen, whole",
    "Fresh cheese, unfermented whey cheese, curd",
    "Cheese except fresh, grated, processed or blue-veined",
    "Milk and cream unsweetened, concentrated",
    "Milk and cream nes sweetened or concentrated",
    "Yogurt",
    "Buttermilk, curdled milk, cream, kephir, etc.",
    "Milk and cream powder sweetened < 1.5% fat",
    "Natural milk products nes",
    "Cheese processed, not grated or powdered",
    "Butter and other fats and oils derived from milk",
    "Milk powder < 1.5% fat",
    "Honey, natural",
    "Whey",
    "Milk not concentrated nor sweetened 1-6% fat",
    "Milk and cream not concentrated nor sweetened < 6% fa",
    "Milk not concentrated nor sweetened < 1% fat",
    "Birds eggs, in shell, fresh, preserved or cooked",
    "Milk and cream powder unsweetened < 1.5% fat",
    "Cheese, blue-veined",
    "Edible products of animal origin nes",
    "Cheese, grated or powdered, of all kinds",
    "Eggs, bird, not in shell, dried",
    "Egg yolks dried",
    "Egg yolks except dried",
    "Eggs, bird, not in shell not dried",
    "Hair & waste of badger and of other brush making hair",
    "Feathers and down used for stuffing",
    "Guts, bladders and stomachs of animals except fish",
    "Whalebone, horns, etc unworked or simply prepared nes",
    "Animal products and domestic animal carcass (non-food",
    "Coral,seashell,cuttle bone,etc, unworked,powder,waste",
    "Ossein and bones treated with acid",
    "Semen bovine",
    "Bristles, hair & waste thereof of pigs, hogs or boars",
    "Hair, human, unworked, waste of human hair",
    "Fish, shellfish and crustaceans (non-food)",
    "Ivory, unworked or simply prepared, powder and waste",
    "Feathers, down, etc. of birds, except for stuffing",
    "Horsehair, waste",
    "Sponges, natural, of animal origin",
    "Bones and horn-cores unworked or simply worked nes",
    "Ambergris, civet, musk, etc for pharmaceutical use",
    "Foliage,branches, for bouquets, etc. - fresh",
    "Foliage,branches, for bouquets, etc. - except fresh",
    "Cut flowers and flower buds for bouquets, etc., fresh",
    "Cut flowers and flower buds for bouquets, dried, etc.",
    "Mosses and lichens for bouquets, ornamental purposes",
    "Plants, live (including their roots),nes",
    "Bulbs, tubers, corms, crowns and rhizomes, dormant",
    "Trees, edible fruit or nut, shrubs and bushes",
    "Roses",
    "Cuttings and slips, not rooted",
    "Rhododendrons and azaleas",
    "Bulbs, tubers, corms etc in growth, chicory plants",
    "Mushroom spawn",
    "Mushrooms, fresh or chilled",
    "Lettuce, fresh or chilled except cabbage lettuce",
    "Peas, shelled or unshelled, fresh or chilled",
    "Kidney beans and white pea beans dried shelled",
    "Beans dried, shelled, nes",
    "Vegetables, frozen nes, uncooked steamed or boiled",
    "Vegetables nes and mixtures provisionally preserved",
    "Legumes, except peas and beans, frozen",
    "Vegetables nes & mixtures, dried, not further prepare",
    "Urd,mung,black or green gram beans dried shelled",
    "Lentils dried, shelled",
    "Beans, shelled or unshelled, fresh or chilled",
    "Celery, other than celeriac, fresh or chilled",
    "Beans, frozen, uncooked steamed or boiled",
    "Sweet corn, frozen, uncooked steamed or boiled",
    "Onions, dried, not further prepared",
    "Mushrooms and truffles, dried, not further prepared",
    "Chickpeas, dried, shelled",
    "Leguminous vegetables dried, shelled",
    "Cauliflowers and headed broccoli, fresh or chilled",
    "Chicory, fresh or chilled, except witloof",
    "Spinach, frozen, uncooked steamed or boiled",
    "Cucumbers and gherkins provisionally preserved",
    "Beans, small red (Adzuki) dried, shelled",
    "Potatoes, fresh or chilled except seed",
    "Cabbage lettuce (head lettuce) fresh or chilled",
    "Beetroot,salsify,celeriac,radishes etc. fresh, chille",
    "Truffles, fresh or chilled",
    "Spinach fresh or chilled",
    "Peas, frozen, uncooked steamed or boiled",
    "Legumes except peas & beans, fresh or chilled",
    "Asparagus, fresh or chilled",
    "Olives, provisionally preserved",
    "Garlic, fresh or chilled",
    "Carrots and turnips, fresh or chilled",
    "Aubergines(egg-plants), fresh or chilled",
    "Potatoes seed, fresh or chilled",
    "Leeks & other alliaceous vegetables, fresh or chilled",
    "Globe artichokes, fresh or chilled",
    "Peppers (Capsicum, Pimenta) fresh or chilled",
    "Arrowroot, salep, etc fresh or dried and sago pith",
    "Potatoes, frozen, uncooked steamed or boiled",
    "Sweet potatoes, fresh or dried",
    "Onions and shallots, fresh or chilled",
    "Cucumbers and gherkins, fresh or chilled",
    "Vegetables, fresh or chilled nes",
    "Broad beans and horse beans dried, shelled",
    "Frozen vegetable mixtures, uncooked, boiled or steame",
    "Brussels sprouts, fresh or chilled",
    "Peas dried, shelled",
    "Edible brassicas nes, fresh or chilled",
    "Tomatoes, fresh or chilled",
    "Onions, provisionally preserved",
    "Manioc (cassava), fresh or dried",
    "Witloof chicory, fresh or chilled",
    "Potatoes, dried, not further prepared",
    "Capers, provisionally preserved",
    "Almonds,fresh or dried, shelled",
    "Nuts edible, fresh or dried, nes",
    "Fruits, fresh nes",
    "Rasp-, mul-berries, etc (uncooked, steam, boil),froze",
    "Pears and quinces, fresh",
    "Lemons and limes, fresh or dried",
    "Grapes, fresh",
    "Apricots, fresh",
    "Coconuts, fresh or dried",
    "Papaws (papayas), fresh",
    "Strawberries, fresh",
    "Avocados, fresh or dried",
    "Cranberries, bilberries, similar fruits, fresh",
    "Fruits and nuts, provisionally preserved nes",
    "Grapes, dried",
    "Raspberry, blackberry, mulberry and loganberry, fresh",
    "Prunes, dried",
    "Oranges, fresh or dried",
    "Fruits, dried nes",
    "Cherries, fresh",
    "Plums, sloes, fresh",
    "Almonds in shell fresh or dried",
    "Mandarin, clementine & citrus hybrids, fresh or dried",
    "Citrus fruits, fresh or dried, nes",
    "Peaches, nectarines, fresh",
    "Mixtures of edible nuts, dried and preserved fruits",
    "Hazelnuts and filberts, fresh or dried, shelled",
    "Pistachios, fresh or dried",
    "Bananas, including plantains, fresh or dried",
    "Walnuts in shell, fresh or dried",
    "Figs, fresh or dried",
    "Walnuts, fresh or dried, shelled",
    "Fruits and nuts (uncooked, steamed, boiled) frozen,ne",
    "Guavas, mangoes and mangosteens, fresh or dried",
    "Apples, fresh",
    "Chestnuts, fresh or dried",
    "Melons (including watermelons), fresh",
    "Apricots, dried",
    "Pineapples, fresh or dried",
    "Cashew nuts, fresh or dried",
    "Cherries provisionally preserved",
    "Grapefruit, fresh or dried",
    "Brazil nuts, fresh or dried",
    "Dates, fresh or dried",
    "Peel of citrus fruit or melons",
    "Hazelnuts and filberts in shell fresh or dried",
    "Black, white or red currants and gooseberries, fresh",
    "Strawberries provisionally preserved",
    "Strawberries, (uncooked steamed or boiled), frozen",
    "Apples, dried",
    "Saffron",
    "Spices nes",
    "Tea, green (unfermented) in packages < 3 kg",
    "Coriander seeds",
    "Coffee, roasted, decaffeinated",
    "Tea, green (unfermented) in packages > 3 kg",
    "Tea, black (fermented or partly) in packages < 3 kg",
    "Tea, black (fermented or partly) in packages > 3 kg",
    "Capsicum or Pimenta, dried, crushed or ground",
    "Fennel seeds, juniper berries",
    "Mixtures of spices",
    "Coffee, not roasted, not decaffeinated",
    "Thyme and bay leaves",
    "Mate",
    "Coffee, not roasted, decaffeinated",
    "Pepper of the genus Piper, crushed or ground",
    "Anise or badian seeds",
    "Curry",
    "Cinnamon and cinnamon-tree flowers crushed or ground",
    "Turmeric (curcuma)",
    "Coffee, roasted, not decaffeinated",
    "Coffee substitutes containing coffee",
    "Ginger",
    "Vanilla beans",
    "Caraway seeds",
    "Pepper of the genus Piper, whole",
    "Nutmeg",
    "Mace",
    "Cumin seeds",
    "Cloves (whole fruit, cloves and stems)",
    "Cinnamon and cinnamon-tree flowers whole",
    "Cardamoms",
    "Coffee husks and skins",
    "Maize except seed corn",
    "Maize (corn) seed",
    "Rice, husked (brown)",
    "Rice, semi-milled or wholly milled",
    "Rice in the husk (paddy or rough)",
    "Wheat except durum wheat, and meslin",
    "Rice, broken",
    "Cereals unmilled nes",
    "Durum wheat",
    "Rye",
    "Canary seed",
    "Grain sorghum",
    "Buckwheat",
    "Oats",
    "Barley",
    "Millet",
    "Maize (corn), hulled, pearled, sliced or kibbled",
    "Cereals, hulled, pearled, sliced or kibbled nes",
    "Maize (corn) starch",
    "Potato flour or meal",
    "Starches except wheat, maize, potato, manioc",
    "Maize (corn) flour",
    "Potato starch",
    "Cereal pellets except wheat",
    "Cereal flour except wheat, meslin, rye, maize, rice",
    "Oats, rolled or flaked grains",
    "Cereal groats or meal except wheat, maize, rice, oats",
    "Cereals, rolled or flaked grains nes",
    "Wheat or meslin flour",
    "Flour, meal, powder of fruit/nut, citrus or melon pee",
    "Wheat meal",
    "Potato flakes, granules and pellets",
    "Maize (corn) groats or meal",
    "Germ of cereals, whole, rolled, flaked or ground",
    "Oat groats or meal",
    "Malt, roasted",
    "Inulin",
    "Flour or meal of sago, starchy roots or tubers",
    "Manioc (cassava) starch",
    "Rye flour",
    "Barley, hulled, pearled, sliced or kibbled",
    "Rice flour",
    "Wheat pellets",
    "Malt, not roasted",
    "Barley, rolled or flaked grains",
    "Rice groats or meal",
    "Flour or meal of dried legumes",
    "Wheat, starch",
    "Oats, hulled, pearled, sliced or kibbled",
    "Wheat gluten",
    "Seed, vegetable, nes for sowing",
    "Seed, fruits and spores for sowing, nes",
    "Seed, forage plants, for sowing nes",
    "Vegetable products nes for human consumption",
    "Sesamum seeds",
    "Seed, lucerne (alfalfa), for sowing",
    "Oil seeds and oleaginous fruits, nes",
    "Seed, clover, for sowing",
    "Hop cones, not ground, powdered or pelleted",
    "Rape or colza seeds",
    "Liquorice roots",
    "Ground-nuts shelled, not roasted or cooked",
    "Locust beans, locust seeds",
    "Sunflower seeds",
    "Ginseng roots",
    "Flour or meal of oil seed, fruit, except mustard, soy",
    "Seed, beet, except sugar, for sowing",
    "Cereal straw & husks, unprepared",
    "Other fodder and forage products, roots, etc.",
    "Hop cones, ground, powdered or pelleted and lupulin",
    "Shea nuts (karite nuts)",
    "Plants & parts, pharmacy, perfume, insecticide use ne",
    "Linseed",
    "Ground-nuts in shell not roasted or cooked",
    "Apricot, peach and plum stones & kernels, human food",
    "Cotton seeds",
    "Castor oil seeds",
    "Soya beans",
    "Mustard seeds",
    "Seed, sugar beet, for sowing",
    "Soya bean flour or meal",
    "Seed, fescue, for sowing",
    "Palm nuts and kernels",
    "Seaweeds and other algae,",
    "Seed, flower, for sowing",
    "Poppy seeds",
    "Sugar cane",
    "Copra",
    "Sugar beet",
    "Seed, Kentucky blue grass, for sowing",
    "Seed, rye grass, for sowing",
    "Seed, Timothy grass, for sowing",
    "Safflower seeds",
    "Lucerne (alfalfa) meal and pellets"
    ]

    export default Data