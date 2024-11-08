interface AvatarGitProps {
  name: string
  github: string
  lemma?: string
}

export default function AvatarGit({ name, github, lemma }: AvatarGitProps) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-10">
        <img src={`https://unavatar.io/${github}`} className="w-24 h-24 mb-3 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yo soy {name}</h5>
        <p className="text-sm text-gray=500 dark:text-gray-400">{lemma}</p>
      </div>
    </div>
  )
}
