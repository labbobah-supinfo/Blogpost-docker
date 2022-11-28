BlogPost

- page d'accueil
    lister un ensemble d'article
    article(id, title, content, date, catégorie)
    une liste darticle est static et importé depuis tableau, json
- login user en un clic
- update letat(state) et changer l'etat du composant
    si non loger --> login
    else logout
- permettre a une utilisateur logger de creer un article avec formulaire
- rendre le nouvel article dans notre page
--------------------------------------------------
    Routing
-/index
     acceuil du site
     liste 5 dernier blogspot
        -titre
        - 100 chars content
-/blog
    -list tous les blogspost
        - titre
        - 100 chars content
        - voir plus => routing /blogs/1 (route /blogs/idDuPost)
    - trier / cherher par critere(category, date)

-/blogs/create
    - form pour ajouter un post

/blogs/update/:id
    - afficher le contenu du blog
    - permettre de le modifier
    - lorque modifier + submit => redirigier sur /blogs

/blogs/:id
    -consulter un blogpost
