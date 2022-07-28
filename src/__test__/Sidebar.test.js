import {render, screen} from '@testing-library/react';
import Sidebar from "../components/sidebar/Sidebar"

describe("Test01 Sidebar Component", () => {
    test("render from with 1 button" , async () => {
        render(<Sidebar/>);
        const button = await screen.findAllByRole("button");
        expect(button).toHaveLength(1);
    });
    test("render from with 8 text" , async () => {
        render(<Sidebar/>);
        expect(screen.getByText('ホーム')).toBeInTheDocument();
        expect(screen.getByText('話題を検索')).toBeInTheDocument();
        expect(screen.getByText('通知')).toBeInTheDocument();
        expect(screen.getByText('メッセージ')).toBeInTheDocument();
        expect(screen.getByText('ブックマーク')).toBeInTheDocument();
        expect(screen.getByText('リスト')).toBeInTheDocument();
        expect(screen.getByText('プロフィール')).toBeInTheDocument();
        expect(screen.getByText('もっとみる')).toBeInTheDocument();

    });

});
