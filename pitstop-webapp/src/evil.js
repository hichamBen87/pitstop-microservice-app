 /* demo vuln – n’utilisez JAMAIS ceci en production */
 const user = prompt('name');      // entrée non contrôlée
 eval(user);                       // ❌ vulnérable
