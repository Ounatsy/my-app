const videos = [
    {
        name: 'Первое видео',
        duration: 15,
        id: 1,
    },
    {
        name: 'Второе видео',
        duration: 15,
        id: 2,
    },
    {
        name: 'Третье видео',
        duration: 15,
        id: 3,
    },
    {
        name: 'видео',
        duration: 15,
        id: 4,
    }
]

export function Videolist() {
    return(
        <>
        <h1>Video List</h1>
        {
            videos.map((video) => {
                return (
                    <div key={video.id}>
                        <p>{video.name}</p>
                        <p>{video.duration}</p>
                        <button>Лайк!</button>
                    </div>
                )
            })
        }
        </>
    )
}