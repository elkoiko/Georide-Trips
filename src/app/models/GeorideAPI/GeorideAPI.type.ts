export interface GeorideAPIAuthToken {
    id: number,
    email: string,
    isAdmin: boolean,
    authToken: string,
    updatedAt: Date,
}

export interface GeorideAPITrip {
    id: number | null;
    trackerId: number;
    averageSpeed: number;
    distance: number;
    duration: number;
    startAddress: string;
    niceStartAddress: string;
    startLat: number;
    startLon: number;
    endAddress: string;
    niceEndAddress: string;
    endLat: number;
    endLon: number;
    startTime: Date;
    endTime: Date;
    staticImage: string;
  }