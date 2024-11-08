import Avatar from "../AvatarGit"

function Cards(){
    return(
          <div className="flex flex-wrap justify-center items-center gap-4 w-1/2">
            <Avatar name="Daniel el bello" github="danimc" lemma="Aprender para vivir" />
            <Avatar name="BollitoDev" github="bollitoDev" />
            <Avatar name="Abraham El poderoso" github="alegorreta-mex" />
            <Avatar name="Santi el Zen" github="prsantiago" />
          </div>
        )
}

export default Cards