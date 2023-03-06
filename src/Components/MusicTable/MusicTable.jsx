import Song from '../Song/Song';



const MusicTable = (props) => {
    return (
      <div>
      {props.songs.map( song => <Song song={song}/> )}
  </div>)
    
}



export default MusicTable