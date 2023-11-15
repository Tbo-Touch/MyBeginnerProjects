window.onload = function(){
    document.getElementById('btnGen').addEventListener('click', genVerse);
};
var verses = 
[
    "Genesis 1:1 'In the beginning God created the heavens and the earth.'",
    "Exodus 20:12 'Honor your father and your mother, so that you may live long in the land the LORD your God is giving you.'",
    "Leviticus 19:18 'Do not seek revenge or bear a grudge against anyone among your people, but love your neighbor as yourself. I am the LORD.'",
    "Numbers 6:24-26 'The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.'",
    "Deuteronomy 6:4 'Hear, O Israel: The LORD our God, the LORD is one.'",
    "Joshua 1:9 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.'",
    "Judges 16:28 'Then Samson prayed to the LORD, Sovereign LORD, remember me. Please, God, strengthen me just once more, and let me with one blow get revenge on the Philistines for my two eyes.'",
    "Ruth 1:16 'But Ruth replied, 'Don’t urge me to leave you or to turn back from you. Where you go, I will go, and where you stay, I will stay. Your people will be my people and your God my God.'",
    "1 Samuel '16:7 But the LORD said to Samuel, 'Do not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.'",
    "2 Samuel '22:31 As for God, his way is perfect: The LORD’s word is flawless; he shields all who take refuge in him.'",
];

function genVerse(){
    var randomVerses = verses [Math.floor(Math.random() * verses.length)]
    document.getElementById('result').innerHTML = "<h3>" + randomVerses + "</h3>";
};
