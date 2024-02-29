import { useCallback, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { useSession } from 'next-auth/react';

//custom hook 간의 공유할 데이터는 함수의 밖으로 빼자
let socket: Socket | null;

export default function useSocket(): [Socket | null, () => void] {
  const { data: session } = useSession();
  const disconnect = useCallback(() => {
    socket?.disconnect();
    socket = null;
  }, []);

  useEffect(() => {
    //생성한 소켓이 없다면 새로운 소켓 연결
    if (!socket) {
      socket = io(`${process.env.NEXT_PUBLIC_BASE_URL}/messages`, {
        // 웹소켓이 없을때는 주기적은 통신이 있어야 했기 때문에 http 폴링으로 지원한다, websocket은 폴링 방식을 지원하지만 현재는 websocket만 사용하기에 transports로 설정
        transports: ['websocket'],
      });

      socket.on('connect_error', (err) => {
        console.error(err);
        console.log(`connect_error due to ${err.message}`);
      });
    }
  }, [session]);

  useEffect(() => {
    if (socket?.connected && session?.user?.email) {
      socket?.emit('login', { id: session?.user?.email });
    }
  }, [session]);

  return [socket, disconnect];
}
