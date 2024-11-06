interface AvatarGitProps {
  name: string
  github: string
  lemma?: string
}

export default function AvatarGit({ name, github, lemma }: AvatarGitProps) {
  return (
    <div className="flex justify-start items-center gap-4 bg-blue-900 hover:bg-blue-700 p-4 rounded-lg w-full text-white hover:cursor-pointer">
      <img src={`https://unavatar.io/${github}`} className="rounded-full w-14 h-14" />
      <h1>Yo soy {name}</h1>
      <p>{lemma}</p>
    </div>
  )
}
