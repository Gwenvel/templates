using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Training.Data
{
    public partial class PlaylistTrack
    {
        public int PlaylistId { get; set; }
        public int TrackId { get; set; }

        [JsonIgnore]
        public Playlist Playlist { get; set; }

        [JsonIgnore]
        public Track Track { get; set; }
    }
}
