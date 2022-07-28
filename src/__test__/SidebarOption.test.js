import {render, screen} from '@testing-library/react';
import SidebarOption from "../components/sidebar/Sidebar"

it('Test01 Sidebar Component', () => {
        render(<SidebarOption text="ホーム"/>);
        const test = screen.getByText(/ホーム/i);
        expect(test).toBeInTheDocument();
});
it('Test0 Sidebar Component', () => {
        render(<SidebarOption text="話題を検索"/>);
        const test = screen.getByText(/話題を検索/i);
        expect(test).toBeInTheDocument();
});
it('Test03 Sidebar Component', () => {
        render(<SidebarOption text="通知"/>);
        const test = screen.getByText(/通知/i);
        expect(test).toBeInTheDocument();
});
it('Test04 Sidebar Component', () => {
        render(<SidebarOption text="メッセージ"/>);
        const test = screen.getByText(/メッセージ/i);
        expect(test).toBeInTheDocument();
});
it('Test05 Sidebar Component', () => {
        render(<SidebarOption text="ブックマーク"/>);
        const test = screen.getByText(/ブックマーク/i);
        expect(test).toBeInTheDocument();
});
it('Test06 Sidebar Component', () => {
        render(<SidebarOption text="リスト"/>);
        const test = screen.getByText(/リスト/i);
        expect(test).toBeInTheDocument();
});
it('Test07 Sidebar Component', () => {
        render(<SidebarOption text="プロフィール"/>);
        const test = screen.getByText(/プロフィール/i);
        expect(test).toBeInTheDocument();
});
it('Test08 Sidebar Component', () => {
        render(<SidebarOption text="もっとみる"/>);
        const test = screen.getByText(/もっとみる/i);
        expect(test).toBeInTheDocument();
});
