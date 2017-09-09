using System;
using System.Collections.Generic;

namespace Training.Data
{
    public partial class Track
    {
        public Track()
        {
            InvoiceItem = new HashSet<InvoiceItem>();
            PlaylistTrack = new HashSet<PlaylistTrack>();
        }

        public int TrackId { get; set; }
        public string Name { get; set; }
        public int AlbumId { get; set; }
        public int MediaTypeId { get; set; }
        public int GenreId { get; set; }
        public string Composer { get; set; }
        public int Milliseconds { get; set; }
        public int Bytes { get; set; }
        public decimal UnitPrice { get; set; }

        public Album Album { get; set; }
        public Genre Genre { get; set; }
        public MediaType MediaType { get; set; }
        public ICollection<InvoiceItem> InvoiceItem { get; set; }
        public ICollection<PlaylistTrack> PlaylistTrack { get; set; }
    }
}
